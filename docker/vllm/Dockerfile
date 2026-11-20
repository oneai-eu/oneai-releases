ARG VLLM_VERSION=v0.34.0
# Optional digest pin of the base, including the leading '@'
# (e.g. @sha256:...). Empty = resolve the tag at build time.
# Deliberately NOT defaulted: a tag plus a digest resolves by digest alone, so a
# default digest would silently win over any other VLLM_VERSION. Pass it per
# build (workflow input vllm_digest). Known amd64 digests:
#   v0.34.0  @sha256:cf5b2fdd087eb4f6d261736967cc5cde974bd22ff4df50365f8fa419b6b4c484
#            (Docker Hub 2026-11-16, CUDA 13.0.2, 10.04 GB compressed)
#   v0.32.0  @sha256:6ee133356d49ed24cee03dd0cda3d3980279a11c107ce3e752c89e76540f41c9
ARG VLLM_DIGEST=
FROM vllm/vllm-openai:${VLLM_VERSION}${VLLM_DIGEST}

LABEL org.opencontainers.image.title="OneStack vLLM"
LABEL org.opencontainers.image.description="vLLM with orjson + Qwen3.5 LoRA embedding_modules patch"
LABEL org.opencontainers.image.source="https://github.com/oneai-eu/oneai-releases"
LABEL org.opencontainers.image.vendor="oneAI"
LABEL org.opencontainers.image.licenses="Apache-2.0"

# ─────────────────────────────────────────────────────────────────────────────
# orjson: ~6× faster JSON serialization for float-heavy responses (embeddings)
# vLLM auto-detects orjson and uses ORJSONResponse (since v0.16.0, PR #33548)
# v0.34.0 (re-checked 2026-11-20): orjson is now a hard dependency
# (requirements/common.txt L23, imported unconditionally in
# entrypoints/serve/utils/api_utils.py L10), so this line is a no-op there
# ("Requirement already satisfied", no upgrade). Kept so that rebuilding an
# older tag (<= v0.32.0, where orjson is optional) still gets it.
# ─────────────────────────────────────────────────────────────────────────────
RUN pip install --no-cache-dir orjson

# ─────────────────────────────────────────────────────────────────────────────
# Qwen3.5 LoRA embedding_modules patch
#
# Upstream vLLM (v0.18.x through v0.28.0) misses the `embedding_modules`
# class attribute on the Qwen3.5 model classes. (Re-ported against the
# v0.28.0 git tag 2026-08-27: qwen3_5.py gained new text-only classes
# Qwen3_5ForCausalLM / Qwen3_5MoeForCausalLM (subclass Qwen3_5ForCausalLMBase)
# and Qwen3_5MoeForConditionalGeneration (subclasses
# Qwen3_5ForConditionalGeneration). Patching the two base classes covers
# all four generative classes via getattr inheritance.)
# v0.32.0 (re-checked 2026-10-29): upstream now declares the attribute on
# Qwen3_5ForCausalLMBase (qwen3_5.py L319) but still NOT on
# Qwen3_5ForConditionalGeneration nor its Qwen3VL base — the patch skips
# the first class and still inserts into the second (the VL/LoRA path).
# v0.34.0 (re-checked 2026-11-20): unchanged — CausalLMBase declares it
# (qwen3_5.py L317), Qwen3_5ForConditionalGeneration (L471) and
# Qwen3VLForConditionalGeneration (qwen3_vl.py L1941) still do not; the
# class headers and the getattr lookup in lora/utils.py are unchanged.
# Without it, LoRA adapters trained with embed_tokens or lm_head in
# target_modules (e.g. unsloth-trained models with 9 LoRA targets) are
# rejected at vllm's add_lora() with "expected target modules in {...}
# but received [...lm_head, ...embed_tokens...]".
#
# LlamaForCausalLM and Qwen3 (non-3.5) declare this attribute; Qwen3.5
# missed it. The patch script adds the missing 4-line declaration to both
# base classes and guards the inheritance-covered subclasses.
#
# Idempotent + hard-fails if vLLM source layout changes — see patch source.
#
# NOTE (deliberate non-change): VLLM_USE_DEEP_GEMM is NOT set in this image.
# The SM120 block-FP8 DeepGEMM workaround (issue #47436) is a per-deployment
# env decision — v0.28.0 pins DeepGEMM with SM120 SF-transform support
# (PR #52035), to be confirmed on the summary canary with BOTH kernel paths.
# v0.34.0: upstream auto-disables DeepGEMM for model_type qwen3_5_text /
# qwen3_5_moe_text on SM100 and SM120 (utils/deep_gemm.py L30-36, applied to
# FP8 linear and FP8 MoE), and VLLM_USE_DEEP_GEMM=0 is still a valid env
# (envs.py L1678) — so it stays a per-deployment decision, now redundant for
# the Qwen3.5/3.6 families.
#
# NOTE: vLLM PR #61928 (DiffKV FP8 tile, the MiMo fix in :v0.32.0-p1) is NOT
# in v0.34.0 (the file is byte-identical to v0.32.0, blob 27b089be) and is NOT
# baked in here; docker/vllm-overlay applies to a v0.34.0 base unchanged.
# ─────────────────────────────────────────────────────────────────────────────
COPY patches/qwen3_5_lora_embedding_modules.py /tmp/onestack_patches/
RUN python3 /tmp/onestack_patches/qwen3_5_lora_embedding_modules.py && \
    rm -rf /tmp/onestack_patches

# Sanity-verify the patch landed before the image is published.
# Checks ALL five Qwen3.5 classes (getattr — inheritance-aware), matching
# how vLLM's get_supported_lora_modules() reads the attribute.
RUN python3 -c "import vllm.model_executor.models.qwen3_5 as m; \
    expected = {'embed_tokens': 'input_embeddings', 'lm_head': 'output_embeddings'}; \
    classes = ['Qwen3_5ForCausalLMBase', 'Qwen3_5ForCausalLM', \
               'Qwen3_5MoeForCausalLM', 'Qwen3_5ForConditionalGeneration', \
               'Qwen3_5MoeForConditionalGeneration']; \
    missing = [c for c in classes \
               if getattr(getattr(m, c), 'embedding_modules', None) != expected]; \
    assert not missing, f'embedding_modules patch verification FAILED for: {missing}'; \
    print('[verify] OK: Qwen3.5 LoRA embedding_modules patch active on all 5 classes')"
