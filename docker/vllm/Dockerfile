ARG VLLM_VERSION=v0.17.1
FROM vllm/vllm-openai:${VLLM_VERSION}

LABEL org.opencontainers.image.title="OneStack vLLM"
LABEL org.opencontainers.image.description="vLLM with orjson for optimized JSON serialization"
LABEL org.opencontainers.image.source="https://github.com/oneai-eu/oneai-releases"
LABEL org.opencontainers.image.vendor="OneAI"
LABEL org.opencontainers.image.licenses="Apache-2.0"

# orjson: ~6x faster JSON serialization for float-heavy responses (embeddings)
# vLLM auto-detects orjson and uses ORJSONResponse (since v0.16.0, PR #33548)
RUN pip install --no-cache-dir orjson
