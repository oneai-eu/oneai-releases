ARG VLLM_VERSION=v0.23.0
FROM vllm/vllm-openai:${VLLM_VERSION}

LABEL org.opencontainers.image.title="OneStack vLLM"
LABEL org.opencontainers.image.description="vLLM with orjson + Qwen3.5 LoRA embedding_modules patch"
LABEL org.opencontainers.image.source="https://github.com/oneai-eu/oneai-releases"
LABEL org.opencontainers.image.vendor="OneAI"
LABEL org.opencontainers.image.licenses="Apache-2.0"

# ─────────────────────────────────────────────────────────────────────────────
# orjson: ~6× faster JSON serialization for float-heavy responses (embeddings)
# vLLM auto-detects orjson and uses ORJSONResponse (since v0.16.0, PR #33548)
# ─────────────────────────────────────────────────────────────────────────────
RUN pip install --no-cache-dir orjson

# ─────────────────────────────────────────────────────────────────────────────
# Qwen3.5 LoRA embedding_modules patch
#
# Upstream vLLM (v0.18.x through v0.23.0) misses the `embedding_modules`
# class attribute on Qwen3_5ForCausalLMBase + Qwen3_5ForConditionalGeneration.
# (Re-verified against the v0.23.0 git tag 2026-06-15: module path + class
#  names unchanged, upstream still has NOT added the attribute — issue #38085
#  was closed without it, PR #39369 closed unmerged. Patch still required.)
# Without it, LoRA adapters trained with embed_tokens or lm_head in
# target_modules (e.g. unsloth-trained models with 9 LoRA targets) are
# rejected at vllm's add_lora() with "expected target modules in {...}
# but received [...lm_head, ...embed_tokens...]".
#
# LlamaForCausalLM and Qwen3 (non-3.5) declare this attribute; Qwen3.5 was
# added recently and missed it. The patch script adds the missing 4-line
# declaration to both classes.
#
# Idempotent + hard-fails if vLLM source layout changes — see patch source.
# ─────────────────────────────────────────────────────────────────────────────
COPY patches/qwen3_5_lora_embedding_modules.py /tmp/onestack_patches/
RUN python3 /tmp/onestack_patches/qwen3_5_lora_embedding_modules.py && \
    rm -rf /tmp/onestack_patches

# Sanity-verify the patch landed before the image is published
RUN python3 -c "import vllm.model_executor.models.qwen3_5 as m; \
    assert getattr(m.Qwen3_5ForCausalLMBase, 'embedding_modules', None) == \
    {'embed_tokens': 'input_embeddings', 'lm_head': 'output_embeddings'}, \
    'Qwen3_5ForCausalLMBase patch verification FAILED'; \
    assert getattr(m.Qwen3_5ForConditionalGeneration, 'embedding_modules', None) == \
    {'embed_tokens': 'input_embeddings', 'lm_head': 'output_embeddings'}, \
    'Qwen3_5ForConditionalGeneration patch verification FAILED'; \
    print('[verify] OK: Qwen3.5 LoRA embedding_modules patch active')"
