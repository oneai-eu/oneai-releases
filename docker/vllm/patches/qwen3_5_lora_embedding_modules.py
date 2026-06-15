"""OneAI patch for vLLM: enable LoRA on embed_tokens + lm_head for Qwen3.5.

Root cause: Qwen3_5ForCausalLMBase and Qwen3_5ForConditionalGeneration in
vllm/model_executor/models/qwen3_5.py do NOT declare an `embedding_modules`
class attribute. vLLM's `get_supported_lora_modules()` (vllm/lora/utils.py)
walks the model and adds `embedding_modules` entries to the supported-LoRA
list IF the class declares them. LlamaForCausalLM and Qwen3 (non-3.5) declare:

    embedding_modules = {
        "embed_tokens": "input_embeddings",
        "lm_head":      "output_embeddings",
    }

Qwen3.5 was added to vLLM relatively recently and missed this declaration,
so any LoRA adapter trained with `embed_tokens` and/or `lm_head` in
target_modules is rejected at `add_lora` time with:

    Exception: Call to add_lora method failed: While loading <path>,
    expected target modules in {...} but received [...lm_head, ...embed_tokens...].

This patch adds the missing declaration to BOTH classes so n8n-v7 (and any
future Qwen3.5 LoRA with full target_modules) loads cleanly.

Affected vLLM versions: at least v0.18.x through v0.23.0 (re-verified against
the v0.23.0 git tag 2026-06-15 — module path + class names unchanged, and
upstream still does not declare the attribute, so this patch remains required).

Idempotent — running twice is a no-op. Hard-fails if the source layout
differs (e.g. class signatures changed) so we don't silently produce a broken
image.
"""

from __future__ import annotations

import sys
from pathlib import Path

import vllm.model_executor.models.qwen3_5 as qwen35_module

QWEN35_PATH = Path(qwen35_module.__file__)
print(f"[patch] target: {QWEN35_PATH}")

CLASSES_TO_PATCH = [
    "Qwen3_5ForCausalLMBase",
    "Qwen3_5ForConditionalGeneration",
]

PATCH_BLOCK = (
    "    # OneAI patch (qwen3_5_lora_embedding_modules.py):\n"
    "    # enable LoRA on embed_tokens + lm_head — mirrors the Llama / Qwen3 declaration.\n"
    "    embedding_modules = {\n"
    '        "embed_tokens": "input_embeddings",\n'
    '        "lm_head": "output_embeddings",\n'
    "    }\n"
    "\n"
)

src = QWEN35_PATH.read_text()

# Idempotency check: bail early if any of the patched classes already has it
already_applied_count = 0
for cls in CLASSES_TO_PATCH:
    cls_obj = getattr(qwen35_module, cls, None)
    if cls_obj is None:
        sys.exit(
            f"[patch] FAIL: class {cls} not found in qwen3_5 module — "
            "vLLM may have renamed/restructured it. Refusing to patch."
        )
    if "embedding_modules" in cls_obj.__dict__:
        already_applied_count += 1

if already_applied_count == len(CLASSES_TO_PATCH):
    print("[patch] already applied to all target classes — skipping (idempotent).")
    sys.exit(0)

# Apply the patch by inserting `embedding_modules = {...}` right after each class
# definition line. We do a structured (non-regex) edit because Python class
# headers are simple enough to find with str search.
new_src = src
for cls in CLASSES_TO_PATCH:
    cls_obj = getattr(qwen35_module, cls)
    if "embedding_modules" in cls_obj.__dict__:
        print(f"[patch] {cls}: already has embedding_modules, skipping")
        continue

    # Find the class definition line. Class headers in qwen3_5.py span multiple
    # lines (multi-base inheritance), so we search for the literal `class X(`
    # and then advance to the matching `):\n` of that header.
    needle = f"class {cls}("
    start = new_src.find(needle)
    if start < 0:
        sys.exit(f"[patch] FAIL: '{needle}' not found in {QWEN35_PATH}")

    # Walk to the closing `):` of the class header (handles multi-line bases).
    depth = 0
    i = start
    while i < len(new_src):
        ch = new_src[i]
        if ch == "(":
            depth += 1
        elif ch == ")":
            depth -= 1
            if depth == 0:
                # Expect ':' immediately after the closing ')', then '\n'
                if new_src[i + 1] != ":":
                    sys.exit(
                        f"[patch] FAIL: malformed class header for {cls} at "
                        f"offset {i} — expected ':' after closing ')'"
                    )
                # Find the newline that ends the class header line
                end_of_header = new_src.find("\n", i)
                if end_of_header < 0:
                    sys.exit(f"[patch] FAIL: no newline after class {cls} header")
                # Insert PATCH_BLOCK right after the header newline
                insertion_point = end_of_header + 1
                new_src = (
                    new_src[:insertion_point]
                    + PATCH_BLOCK
                    + new_src[insertion_point:]
                )
                print(f"[patch] {cls}: inserted embedding_modules at offset {insertion_point}")
                break
        i += 1
    else:
        sys.exit(f"[patch] FAIL: did not find end of class header for {cls}")

if new_src == src:
    sys.exit("[patch] FAIL: no changes made — refusing to write")

QWEN35_PATH.write_text(new_src)
print(f"[patch] wrote {len(new_src) - len(src)} bytes to {QWEN35_PATH}")
print("[patch] OK: embedding_modules added to Qwen3.5 classes")
