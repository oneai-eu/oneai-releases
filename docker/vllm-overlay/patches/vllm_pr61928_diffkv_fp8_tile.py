"""Apply vLLM PR #61928 (runtime part) to the installed vLLM v0.32.0.

Upstream: issue vllm-project/vllm#61927, "MiMo-V2 with FP8 KV cache crashes on
NVIDIA SM89/SM12x: Triton DiffKV fails to compile ("K >= 32")"; fix PR
vllm-project/vllm#61928, "[Bugfix][Attention] Use a 32-wide KV tile for FP8
queries in grouped DiffKV launches", head commit
486dc1ca4e5853842ef54536a8eba76bee13dece (open, not merged, as of 2026-11-03).

The PR changes one runtime file,
vllm/v1/attention/ops/triton_unified_attention_diffkv.py (+3 lines), and one
test file that is not part of the installed package. Only the runtime hunk is
applied here; see pr61928-runtime.diff next to this script.

Guards (git blob SHA-1 of the file):
- before: must be 27b089be0e137c8ea94a71bbdc18586d625503f4, the file at the
  v0.32.0 tag (identical to the PR's base on main);
- after: must be 4e816910ec202f41696124d73e19d3e003f53312, the file at the PR
  head. So the image carries exactly the PR's file, byte for byte.
Already patched (after-hash) -> skip. Any other content -> hard fail, so a base
bump cannot silently skip or misapply the patch.
"""

import hashlib
import importlib.util
import sys
from pathlib import Path

BLOB_BEFORE = "27b089be0e137c8ea94a71bbdc18586d625503f4"
BLOB_AFTER = "4e816910ec202f41696124d73e19d3e003f53312"
ANCHOR = (
    "    if spec_tile is not None:\n"
    "        tile_size = spec_tile\n"
    "\n"
    "    grid: tuple[Any, ...]\n"
)
REPLACEMENT = (
    "    if spec_tile is not None:\n"
    "        tile_size = spec_tile\n"
    "    if q.element_size() < 2:\n"
    "        # Triton needs K >= 32 for FP8 tl.dot; P @ V reduces over the KV tile.\n"
    "        tile_size = max(tile_size, 32)\n"
    "\n"
    "    grid: tuple[Any, ...]\n"
)


def git_blob_sha1(data: bytes) -> str:
    return hashlib.sha1(b"blob %d\0" % len(data) + data).hexdigest()


def target_path() -> Path:
    if len(sys.argv) > 1:
        return Path(sys.argv[1])
    spec = importlib.util.find_spec("vllm")
    if spec is None or not spec.submodule_search_locations:
        sys.exit("[patch] FAIL: vllm package not found")
    root = Path(next(iter(spec.submodule_search_locations)))
    return root / "v1" / "attention" / "ops" / "triton_unified_attention_diffkv.py"


def main() -> None:
    path = target_path()
    data = path.read_bytes()
    blob = git_blob_sha1(data)
    if blob == BLOB_AFTER:
        print(f"[patch] {path.name}: already at PR #61928 head, skipping")
        return
    if blob != BLOB_BEFORE:
        sys.exit(f"[patch] FAIL: {path} has blob {blob}, expected v0.32.0 {BLOB_BEFORE}")
    src = data.decode("utf-8")
    if src.count(ANCHOR) != 1:
        sys.exit(f"[patch] FAIL: anchor found {src.count(ANCHOR)} times in {path}")
    out = src.replace(ANCHOR, REPLACEMENT).encode("utf-8")
    if git_blob_sha1(out) != BLOB_AFTER:
        sys.exit(f"[patch] FAIL: result blob {git_blob_sha1(out)} != PR head {BLOB_AFTER}")
    path.write_bytes(out)
    # Drop the stale bytecode of the old source so nothing can load it.
    for pyc in path.parent.joinpath("__pycache__").glob(f"{path.stem}.*.pyc"):
        pyc.unlink()
    print(f"[patch] {path.name}: PR #61928 applied (blob {BLOB_AFTER})")


if __name__ == "__main__":
    main()
