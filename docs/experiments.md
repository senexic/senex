---
title: Experiments
description: Partial prototypes that explore pieces of the SENEX design. They are not AIA, they run on test networks or with no value attached, and they may change, pause or be retired.
---

# Experiments

Partial prototypes built to explore pieces of the SENEX design. Each shows one possibility of the full system and how it could work in future. They are not AIA, they run on test networks or with no value attached, and they may change, pause or be retired.

:::note Not the product
The experiments are not the SENEX product and are not AIA. Nothing in them has value: test tokens are worth nothing, and no experiment pays, earns or holds anything real. See [Current status](status.md) for what works today.
:::

| Experiment | What it explores | Network | State |
| --- | --- | --- | --- |
| [Agents over a chain, with a fee](https://aia.senexic.io) | Asking agents for answers over a chain and paying per answer | Polygon Amoy testnet (test tokens) | Experiment |
| [AIA on TON](https://aiat.senexic.io) | AIA answering through the TON blockchain and the Cocoon inference network | TON and Cocoon (connection paused) | Paused; interface and design only |
| [QAIA — quantum branching](#qaia--quantum-branching) | One question branching into several candidate answers, with a measurement choosing which ones surface | App: simulated measurement. Routing circuit: IBM Quantum ibm_fez, run separately | Concept; routing circuit run on IBM hardware |

## Agents over a chain, with a fee

*Experiment · Polygon Amoy testnet* · [aia.senexic.io](https://aia.senexic.io)

A 2025 browser prototype. A model runs in your browser, each request is recorded on the Polygon Amoy testnet, and a small fee in test tokens goes to the validators who handle it. It shows how agents could be asked for answers over a chain and paid per answer. Test tokens have no value.

![Agents over a chain experiment dashboard as a guest, with the yellow experiment banner at the top, a test credits panel showing 0 test ASHA, and a Testnet Faucet card offering 100 test ASHA with no value](/img/experiments/aia-dashboard.webp)

*Live experiment on Polygon Amoy testnet, captured October 2026: the dashboard as a guest, with test credits and the testnet faucet.*

![Agents over a chain chat screen in User Mode with the Qwen 2.5 3B model selected and the request fee panel: 1 validator, base fee 0.0010 and total 0.0012 test POL (Amoy, no value)](/img/experiments/aia-chat-fee.webp)

*Live experiment on Polygon Amoy testnet, captured October 2026: the chat screen with the request fee in test POL. A guest has no balance, so the panel shows insufficient balance.*

![Agents over a chain Network page as a guest: Polygon Amoy Testnet with a Switch to Amoy button, and network statistics for active validators, total contributions and the test fee pool in test POL](/img/experiments/aia-network.webp)

*Live experiment on Polygon Amoy testnet, captured October 2026: the Network page as a guest, with no wallet connected.*

## AIA on TON

*Experiment · paused* · [aiat.senexic.io](https://aiat.senexic.io)

An early prototype exploring how AIA — Artificial Intelligent Assistant — could answer through the TON blockchain and the Cocoon inference network, with Telegram sign-in. It is not the AIA product. The network connection is paused, so it shows the interface and design only.

![AIA on TON welcome screen with the teal experiment banner, the Paused label next to the title, and the model set to TON network (paused)](/img/experiments/aiat-welcome.webp)

*Paused experiment, interface only, captured October 2026: the welcome screen.*

![AIA on TON after a test message: the question "Hello! What can you do in this experiment?" and an Experiment Notice saying the Cocoon network connection is paused, so no answer can be generated](/img/experiments/aiat-paused-notice.webp)

*Paused experiment, interface only, captured October 2026: a test message and the notice that the network connection is paused.*

![AIA on TON model menu open, listing TON network (paused), Desktop companion (not distributed) and Companion + TON (not available)](/img/experiments/aiat-model-menu.webp)

*Paused experiment, interface only, captured October 2026: the model menu.*

## QAIA — quantum branching

*Concept · not running* · routing circuit run on IBM Quantum hardware

A 2025 concept prototype. One question branches into several candidate answers, and a quantum measurement chooses which branches surface, with the circuit shown alongside. In the prototype the selection step used a simulated measurement; a quantum backend was not connected. Screenshots show the prototype interface with example content.

How the prototype was put together:

- A language model (zephyr-7b, through Hugging Face) generated several candidate answers to one prompt.
- The interface showed a main response, the other branches as "Quantum Branching Answers", and a circuit panel with the measurement and shot count.
- The circuits were OpenQASM text templates (Hadamard superposition, Grover, QFT). In the app they were displayed, not run: the selection used a pseudo-random number in place of a measurement, and the app never called an IBM Quantum backend.
- QAIA is not deployed and has no live session. It is a concept for how branching answers could be presented.

![QAIA prototype: the question "How should I plan a week of study for an exam?" with a main answer and three branching answers labelled Topic-first, Practice-first and Rhythm-first](/img/experiments/qaia-dark-branching.webp)

*Prototype interface shown in a dark theme, example content: one main answer and three branching answers.*

![QAIA prototype with the "View Quantum Circuit" panel open, showing a 3-qubit OpenQASM circuit of Hadamard gates and measurements, with measurement 101 and 1024 shots](/img/experiments/qaia-dark-circuit.webp)

*Prototype interface shown in a dark theme, example content: the circuit panel. The circuit is a text template and the measurement shown was simulated.*

![QAIA prototype input box with the partial question "How should I plan" and a dropdown of three suggested completions, accepted with the Tab key](/img/experiments/qaia-dark-autocomplete.webp)

*Prototype interface shown in a dark theme, example content: suggested completions while typing.*

### Run on IBM Quantum hardware

The routing circuit was run on IBM Quantum hardware, separately from the app. The 2025 QAIA app itself used a simulated measurement and never called IBM.

The idea being tested is simple: quantum randomness chooses between answer routes. Two qubits are put into an equal superposition and measured, and the two resulting bits pick one of four routes for answering a question. This makes no claim of quantum advantage; the measurement is only a source of randomness for the choice.

- **Backend:** ibm_fez
- **Processor:** IBM Heron r2, 156 qubits
- **Date:** 20 October 2026
- **Shots:** 1,024
- **Job ID:** `dbbnng7i0auc73940qs0`
- **QPU time:** 2 s

The circuit uses four qubits. Qubits q0 and q1 choose the route. Qubits q2 and q3 go through controlled-X and phase gates linked to q0 and q1; in the ideal case these leave all 16 four-bit outcomes equally likely.

```text title="QAIA routing circuit (OpenQASM 2.0)"
OPENQASM 2.0;
include "qelib1.inc";
qreg q[4];
creg c[4];
h q[0];
h q[1];
h q[2];
h q[3];
cx q[0],q[2];
cx q[1],q[3];
rz(pi/2) q[2];
rz(-pi/2) q[3];
measure q[0] -> c[0];
measure q[1] -> c[1];
measure q[2] -> c[2];
measure q[3] -> c[3];
```

The route is read from the bits of q1 and q0 (the last two bits of each outcome). Out of 1,024 shots on ibm_fez:

| Route | Bits (q1 q0) | Shots | Share | Ideal |
| --- | --- | ---: | ---: | ---: |
| A · Direct | 00 | 273 | 26.7% | 25% |
| B · Reasoning | 01 | 256 | 25.0% | 25% |
| C · Tool-assisted | 10 | 270 | 26.4% | 25% |
| D · Fallback | 11 | 225 | 22.0% | 25% |

Each route was picked close to a quarter of the time. With 1,024 shots, sampling alone (shot noise) moves each share by about 1.4 percentage points, and readout and gate errors on real hardware add a little more, which is why the shares are not exactly 25%.

![Histogram of all 16 four-bit measurement outcomes from 0000 to 1111 on IBM ibm_fez, each between 47 and 91 counts out of 1024 shots](/img/experiments/ibm-fez-histogram.webp)

*Measurement outcomes for all four qubits, IBM ibm_fez, job dbbnng7i0auc73940qs0*

![IBM Quantum Platform job status card: Completed, created 20 October 2026 at 6:03 PM, pending 29 minutes 32 seconds, completed at 6:33 PM, total usage 2 seconds](/img/experiments/ibm-fez-status.webp)

*Job status on IBM Quantum Platform*

## How experiments relate to SENEX

Experiments are separate from the SENEX product and its status. See [Current status](status.md) for what works today.

## Related pages

- [Current status](status.md)
- [Proof of Data](thesis.md)
- [Roadmap](roadmap.md)
