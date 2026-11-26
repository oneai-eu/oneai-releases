FROM vllm/vllm-openai-rocm:kimi-k31-020490a@sha256:f2cef9ee13f652b8281bcb0687759c6e8f5035d24ee46f2a2dffb3cf3c0b9b14

LABEL org.opencontainers.image.title="OneStack vLLM (ROCm) kimi-k31 p1" \
      org.opencontainers.image.source="https://github.com/oneai-eu/oneai-releases" \
      org.opencontainers.image.description="vllm/vllm-openai-rocm:kimi-k31-020490a (sha256:f2cef9ee13f6...) plus vllm-project/vllm cherry-picks (vllm/ sources only): #67021 merged 99b0b0b0f34a (kimi_k3 tool parser incremental tool-argument streaming); #65169 head 81acfd8297b7 (kimi_k3 reasoning: reply as content when think channel skipped); #69623 head 859cd2b0586f (top-level thinking honoured, 400 on invalid effort). Context-drift adapted for the older base."

ARG SP=/usr/local/lib/python3.14/dist-packages
COPY patches/ /tmp/p1-patches/
RUN set -e; \
    for p in /tmp/p1-patches/01-pr67021.patch /tmp/p1-patches/02-pr65169.patch /tmp/p1-patches/03-pr69623.patch; do \
      echo "== $p"; patch -p1 --fuzz=0 --no-backup-if-mismatch -d "$SP" < "$p"; \
    done; \
    if find "$SP/vllm" -name '*.rej' -o -name '*.orig' | grep -q .; then echo "reject/orig files found"; exit 1; fi; \
    cd "$SP"; \
    python3 -m py_compile \
      vllm/tool_parsers/kimi_k3_tool_parser.py vllm/parser/kimi_k3.py \
      vllm/reasoning/kimi_k3_reasoning_parser.py \
      vllm/entrypoints/openai/chat_completion/protocol.py vllm/renderers/base.py \
      vllm/renderers/kimi_k3.py vllm/renderers/online_renderer.py; \
    python3 -c "import vllm.tool_parsers.kimi_k3_tool_parser, vllm.parser.kimi_k3, vllm.reasoning.kimi_k3_reasoning_parser, vllm.entrypoints.openai.chat_completion.protocol, vllm.renderers.base, vllm.renderers.kimi_k3, vllm.renderers.online_renderer; print('import ok')"; \
    find /tmp/p1-patches -delete
