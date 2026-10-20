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
| [QAIA — quantum branching](#qaia--quantum-branching) | One question branching into several candidate answers, with a measurement choosing which ones surface | None (simulated measurement; no quantum backend) | Concept · not running; screenshots only |

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

*Concept · not running* · screenshots only

A 2025 concept prototype. One question branches into several candidate answers, and a quantum measurement chooses which branches surface, with the circuit shown alongside. In the prototype the selection step used a simulated measurement; a quantum backend was not connected. Screenshots show the prototype interface with example content.

How the prototype was put together:

- A language model (zephyr-7b, through Hugging Face) generated several candidate answers to one prompt.
- The interface showed a main response, the other branches as "Quantum Branching Answers", and a circuit panel with the measurement and shot count.
- The circuits were OpenQASM text templates (Hadamard superposition, Grover, QFT). They were displayed, not run: the selection used a pseudo-random number in place of a measurement, and no IBM Quantum backend was ever connected.
- QAIA is not deployed and has no live session. It is a concept for how branching answers could be presented.

![QAIA prototype: the question "How should I plan a week of study for an exam?" with a main answer and three branching answers labelled Topic-first, Practice-first and Rhythm-first](/img/experiments/qaia-dark-branching.webp)

*Prototype interface shown in a dark theme, example content: one main answer and three branching answers.*

![QAIA prototype with the "View Quantum Circuit" panel open, showing a 3-qubit OpenQASM circuit of Hadamard gates and measurements, with measurement 101 and 1024 shots](/img/experiments/qaia-dark-circuit.webp)

*Prototype interface shown in a dark theme, example content: the circuit panel. The circuit is a text template and the measurement shown was simulated.*

![QAIA prototype input box with the partial question "How should I plan" and a dropdown of three suggested completions, accepted with the Tab key](/img/experiments/qaia-dark-autocomplete.webp)

*Prototype interface shown in a dark theme, example content: suggested completions while typing.*

## How experiments relate to SENEX

Experiments are separate from the SENEX product and its status. See [Current status](status.md) for what works today.

## Related pages

- [Current status](status.md)
- [Proof of Data](thesis.md)
- [Roadmap](roadmap.md)
