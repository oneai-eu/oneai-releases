"""Kimi K3.1 T0 pre-flight (CPU only, run inside the serving image, no GPU, no network).

Checks per image:
  1. `vllm serve --help` lists the flags the stage bodies use.
  2. Reasoning-parser cases from the 12.11 repro (A1/A2) plus the #65169 skipped-think shapes.
Mount the model read-only at /models/Kimi-K3.1-Pro. Prints one JSON line per case.
"""

import json
import subprocess
import types
import warnings

warnings.filterwarnings("ignore")

FLAGS = ["--tool-strict-level", "--mamba-ssm-cache-dtype", "--prefill-schedule-interval",
         "--decode-context-parallel-size", "--dcp-comm-backend", "--prefix-match-unit",
         "--override-generation-config", "--language-model-only"]

out = {}
try:
    h = subprocess.run(["vllm", "serve", "--help=all"], capture_output=True, text=True, timeout=300)
    txt = h.stdout + h.stderr
    out["flags"] = {f: (f in txt) for f in FLAGS}
except Exception as e:  # noqa: BLE001
    out["flags_error"] = str(e)[:300]

import vllm  # noqa: E402
from transformers import AutoTokenizer  # noqa: E402

out["vllm"] = vllm.__version__
path = "/models/Kimi-K3.1-Pro"
tok = AutoTokenizer.from_pretrained(path, trust_remote_code=True)
from vllm.reasoning.kimi_k3_reasoning_parser import KimiK3ReasoningParser  # noqa: E402

P = KimiK3ReasoningParser(tok)
O, C, S = "<|open|>", "<|close|>", "<|sep|>"
req = types.SimpleNamespace(tools=[{"type": "function", "function": {"name": "bash"}}], tool_choice="auto")
tools = (f'{O}tools{S}{O}call tool="bash" index="1"{S}{O}argument key="command" type="string"{S}ls'
         f'{C}argument{S}{C}call{S}{C}tools{S}')
cases = {
    "ok_think_closed": (f"plan{C}think{S}{O}response{S}Doing it:{C}response{S}{tools}{C}message{S}", "tool"),
    "A1_think_close_omitted": (f"plan. Applying it now:{C}response{S}{tools}{C}message{S}", "tool"),
    "A2_straight_into_tools": (f"plan{tools}{C}message{S}", "tool"),
    "S6_skipped_think_empty": (f"{C}think{S}{O}response{S}Antwort 42{C}response{S}{C}message{S}", "Antwort 42"),
    "S6_skipped_think_none": (f"{O}response{S}Antwort 42{C}response{S}{C}message{S}", "Antwort 42"),
    "S6_plain_reply_tail": (f"Antwort 42{C}response{S}{C}message{S}", "Antwort 42"),
}
res = {}
for name, (text, want) in cases.items():
    try:
        r, rest = P.extract_reasoning(text, req)
        if want == "tool":
            good = rest is not None and 'call tool="bash"' in rest
        else:
            good = rest is not None and want in rest
        res[name] = {"pass": good, "reasoning_head": (r or "")[:60], "content_head": (rest or "")[:80]}
    except Exception as e:  # noqa: BLE001
        res[name] = {"pass": False, "error": f"{type(e).__name__}: {e}"[:200]}
out["parser"] = res
ids = lambda s: tok.encode(s, add_special_tokens=False)  # noqa: E731
out["is_reasoning_end"] = {n: bool(P.is_reasoning_end(ids(cases[n][0])))
                           for n in ("A1_think_close_omitted", "A2_straight_into_tools")}
print(json.dumps(out, ensure_ascii=False))
