# Overlay on an existing onestack-vllm image: adds patches on top of exactly
# that image (same orjson, same Qwen3.5 LoRA patch, same bits), instead of
# rebuilding from upstream. BASE_IMAGE must be a full reference incl. digest,
# e.g. ghcr.io/oneai-eu/onestack-vllm:v0.32.0@sha256:072148cc....
ARG BASE_IMAGE
FROM ${BASE_IMAGE}

LABEL org.opencontainers.image.title="OneStack vLLM"
LABEL org.opencontainers.image.description="onestack-vllm + vLLM PR #61928 (DiffKV: 32-wide KV tile for FP8 queries)"
LABEL org.opencontainers.image.source="https://github.com/oneai-eu/oneai-releases"
LABEL org.opencontainers.image.vendor="oneAI"
LABEL org.opencontainers.image.licenses="Apache-2.0"

# ─────────────────────────────────────────────────────────────────────────────
# vLLM PR #61928 (fixes issue #61927): MiMo-V2 with FP8 KV cache crashes on
# SM89/SM12x because the DiffKV spec-verify launch forces a 16-wide KV tile,
# while Triton needs K >= 32 for an FP8 tl.dot (P @ V). The PR keeps the tile
# at >= 32 for FP8 queries. Only the runtime hunk applies to an installed vLLM
# (the PR's other file is a test). The script checks the git blob hash before
# (v0.32.0) and after (PR head 486dc1ca), so the image carries exactly the
# PR's file, and it hard-fails on any other source.
# Remove this overlay once a vLLM release contains the PR.
# ─────────────────────────────────────────────────────────────────────────────
COPY patches/ /tmp/onestack_patches/
RUN python3 /tmp/onestack_patches/vllm_pr61928_diffkv_fp8_tile.py && \
    rm -rf /tmp/onestack_patches

# Verify before publishing: the installed file is the PR head's file.
RUN python3 -c "import hashlib, importlib.util, pathlib; \
spec = importlib.util.find_spec('vllm'); \
p = pathlib.Path(next(iter(spec.submodule_search_locations))) / 'v1/attention/ops/triton_unified_attention_diffkv.py'; \
d = p.read_bytes(); \
h = hashlib.sha1(b'blob %d\0' % len(d) + d).hexdigest(); \
assert h == '4e816910ec202f41696124d73e19d3e003f53312', f'PR #61928 verification FAILED: {h}'; \
print('[verify] OK: vLLM PR #61928 active (blob 4e816910)')"
