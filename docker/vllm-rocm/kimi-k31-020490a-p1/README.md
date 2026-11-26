# onestack-vllm `kimi-k31-020490a-rocm-p1` (AMD ROCm, Kimi K3.1)

Build recipe for `ghcr.io/oneai-eu/onestack-vllm:kimi-k31-020490a-rocm-p1`: the upstream AMD Kimi K3.1
recipe image plus three vLLM fixes for the Kimi K3 tool and reasoning parsers. Built and tested on an
8× MI355X host (gfx950, ROCm 10.0) on 2026-11-26. Not wired into CI: the image is ~39 GB and was built on
the GPU host (the `build-vllm.yml` workflow covers the CUDA `onestack-vllm` images only).

## Base

`vllm/vllm-openai-rocm:kimi-k31-020490a@sha256:f2cef9ee13f652b8281bcb0687759c6e8f5035d24ee46f2a2dffb3cf3c0b9b14`

- The tag is an OCI index (`sha256:4d8aef526b8da39ace74edd4d2e425dc1468e312000577a584572e675be40993`, pushed
  2026-11-23); `f2cef9ee…` is its linux/amd64 manifest. Pin the amd64 digest.
- vLLM in the base reports `0.0.0+kk31.020490a.rocm100` (branch `k31-amd-tracking`), Python 3.14, packages under
  `/usr/local/lib/python3.14/dist-packages`.

## Patches (`patches/`, applied in order with `patch -p1 --fuzz=0`, `vllm/` sources only)

| File | Upstream | State (2026-11-26) | What it fixes |
|---|---|---|---|
| `01-pr67021.patch` | vllm-project/vllm#67021, head `ea64cdc55552a55898aa7009ced81c464f25ee2c`, merged as `99b0b0b0f34adf48122e54396448950d72efb0fe` (2026-11-24) | merged on main, in no release yet | `kimi_k3` tool parser streams tool arguments incrementally. Without it a long argument arrives in one piece at the end (measured: 138 s without a single SSE chunk for an 18k-character `write_file` argument; with the patch 1.3 s) |
| `02-pr65169.patch` | vllm-project/vllm#65169, head `81acfd8297b731c9370babdc6e642a8d235069fa` | open | `kimi_k3` reasoning parser returns the reply as content when the think channel is skipped (base: empty `content`). With this patch set the T0 "A1" shape (think-close marker omitted before a tool call) also passes |
| `03-pr69623.patch` | vllm-project/vllm#69623, head `859cd2b0586f49024bbb59c9ff9e74153cf456d3` | open | top-level `thinking` object honoured in Chat Completions; efforts the encoder rejects (e.g. `medium`) give 400 instead of 500 |

`upstream-raw/` holds the unmodified `vllm/` hunks of each PR at the SHAs above, for comparison.

### Hand-adapted hunks (context drift only; the base is older than the PRs' parents)

- **vllm-project/vllm#67021** (2 of 7 hunks): the base has the older "conservative" streaming code (no `_stream_call_close_idx` /
  `_call_close_re`). Hunk 4: add `_call_close_re`, `_call_open_re`, `_arg_open_re`, `_arg_close_re` and the new
  streaming state (`_stream_tool_idx`, `_stream_call`, `_stream_tools_closed`); the old state lines the PR removes do
  not exist in the base. Hunk 7: replace the base's tail of `extract_tool_calls_streaming` with the PR's
  `self._stream_tool_idx = …; deltas = self._stream_tool_calls(current_text)` block. The resulting file equals the
  upstream merged file except comment/docstring style and whitespace.
- **vllm-project/vllm#65169** (1 of 12 hunks; two more needed fuzz 1–2 against the raw diff, the adapted patch applies with fuzz 0): `extract_reasoning` signature and
  docstring: add `token_ids: Sequence[int] = ()` and the two new docstring shapes (`Sequence` is already imported).
- **vllm-project/vllm#69623** (2 hunks): `renderers/kimi_k3.py::_apply_chat_template`: the base calls
  `self.get_tokenizer().apply_chat_template(...)` directly; wrapped in the PR's
  `try / except AssertionError -> VLLMValidationError` using `self.get_tokenizer()`.
  `renderers/online_renderer.py::render_chat`: the base lacks `render_start = time.perf_counter()`; the
  `thinking.keep` check is inserted before `tokenizer = self.renderer.tokenizer`. `protocol.py` and `base.py`
  applied with offsets only.

Not included: vllm-project/vllm#53249. The T0 "A2" shape (output goes straight into tool calls without closing the
think channel) therefore still fails; the stall measurements (0 of 988 tool steps on both images) gave no reason to add it.

sha256 of the applied patches: `01` `35eeaa79b466d66953f2d97b8fa264f84ef99365bf4fbb82441f37fe16a3147a`,
`02` `5b285a782cbb1bb5aca0cb42ba17c076e76bbc1e3a810a322c6590a26a076874`,
`03` `5f558406ea6b9b4c196cef2b9cd9bbd09c6be2b6d9d46f523752e39761f50889`.

## Build

On an amd64 host with Docker (no GPU needed for the build), from this directory:

```bash
docker pull vllm/vllm-openai-rocm:kimi-k31-020490a@sha256:f2cef9ee13f652b8281bcb0687759c6e8f5035d24ee46f2a2dffb3cf3c0b9b14
docker build -t ghcr.io/oneai-eu/onestack-vllm:kimi-k31-020490a-rocm-p1 .
```

The Dockerfile fails the build on any rejected hunk, `.rej`/`.orig` file, compile error or import error of the
seven touched modules. Built 2026-11-26 as image `sha256:1405ec80efdf7d582f99c80ec8da8e0f40c0aec5c8e8e2c5a85a92c11016fe7f`
(39.35 GB).

## Checks

1. **T0, parser pre-flight (CPU only, no GPU, no network):** `t0_kimi.py`, with the model directory mounted read-only
   (only the tokenizer files are read):

   ```bash
   docker run --rm --network none --entrypoint python3 \
     -v /path/to/Kimi-K3.1-Pro:/models/Kimi-K3.1-Pro:ro -v "$PWD/t0_kimi.py:/t0.py:ro" \
     ghcr.io/oneai-eu/onestack-vllm:kimi-k31-020490a-rocm-p1 /t0.py
   ```

   Expected on this image: `ok_think_closed`, `A1_think_close_omitted`, all three `S6_*` cases `pass: true`;
   `A2_straight_into_tools` `pass: false` (open upstream, vllm-project/vllm#53249). The base image fails A1 and `S6_plain_reply_tail`.
   (`vllm serve --help` needs a GPU device; the flag check in the script reports false without one.)
2. **Serving (8× MI355X, TP8 + DCP8, 1M context, strict tool calls):** same flags as the AMD Kimi K3.1 recipe.
   A/B against the base on 2026-11-26: identical throughput (direct, 1024 in / 512 out: 71 / 476 / 1,267 tok/s at
   1 / 8 / 32 streams), T1–T7 functional series pass, longest SSE gap for a long tool argument 138 s → 1.3 s, and
   0 stalls in 52 synthetic agent runs (988 tool steps) on both images.

## When this image can go

Drop it once an official `vllm/vllm-openai-rocm` image that supports Kimi K3.1 on gfx950 contains all three fixes
(vllm-project/vllm#67021 is merged on main; vllm-project/vllm#65169 and vllm-project/vllm#69623 were still open on 2026-11-26). Verify with T0 above (A1 and the S6
cases pass) and a streaming check of a long tool argument (SSE gaps of seconds, not minutes) before switching.
