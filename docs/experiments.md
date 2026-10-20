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

## AIA on TON

*Experiment · paused* · [aiat.senexic.io](https://aiat.senexic.io)

An early prototype exploring how AIA — Artificial Intelligent Assistant — could answer through the TON blockchain and the Cocoon inference network, with Telegram sign-in. It is not the AIA product. The network connection is paused, so it shows the interface and design only.

## QAIA — quantum branching

*Concept · not running* · screenshots only

A 2025 concept prototype. One question branches into several candidate answers, and a quantum measurement chooses which branches surface, with the circuit shown alongside. In the prototype the selection step used a simulated measurement; a quantum backend was not connected. Screenshots show the prototype interface with example content.

How the prototype was put together:

- A language model (zephyr-7b, through Hugging Face) generated several candidate answers to one prompt.
- The interface showed a main response, the other branches as "Quantum Branching Answers", and a circuit panel with the measurement and shot count.
- The circuits were OpenQASM text templates (Hadamard superposition, Grover, QFT). They were displayed, not run: the selection used a pseudo-random number in place of a measurement, and no IBM Quantum backend was ever connected.
- QAIA is not deployed and has no live session. It is a concept for how branching answers could be presented.

![QAIA prototype: the question "How should I plan a week of study for an exam?" with a main answer and three branching answers labelled Topic-first, Practice-first and Rhythm-first](/img/experiments/qaia-branching.webp)

*Prototype interface, example content: one main answer and three branching answers.*

![QAIA prototype with the "View Quantum Circuit" panel open, showing a 3-qubit OpenQASM circuit of Hadamard gates and measurements, with measurement 101 and 1024 shots](/img/experiments/qaia-circuit.webp)

*Prototype interface, example content: the circuit panel. The circuit is a text template and the measurement shown was simulated.*

![QAIA prototype input box with the partial question "How should I plan" and a dropdown of three suggested completions, accepted with the Tab key](/img/experiments/qaia-autocomplete.webp)

*Prototype interface, example content: suggested completions while typing.*

## How experiments relate to SENEX

Experiments are separate from the SENEX product and its status. See [Current status](status.md) for what works today.

## Related pages

- [Current status](status.md)
- [Proof of Data](thesis.md)
- [Roadmap](roadmap.md)
