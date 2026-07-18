# Scalability & Performance

:::warning No public production benchmark
SENEX does not currently claim production-scale capacity, global availability, linear scaling, a specific uptime level, or guaranteed response time. The working foundation is local-first and remains under development toward a future V1-testnet. Performance claims require reproducible evidence.
:::

For SENEX, scalability is not only request volume. A system must preserve owner control, predictable behavior, recoverability, and policy enforcement as participation grows. Improving throughput while weakening those properties would not meet the product objective.

## Status

| Status label | Scope |
| --- | --- |
| **Working foundation** | Establish and profile local-first behavior on supported development configurations. |
| **V1-testnet target** | Validate a production-candidate network under controlled, test-only workloads and realistic failure conditions. |
| **Research direction** | Broader federation, heterogeneous devices, sustained coordination, and efficient collective-intelligence workflows. |
| **External validation required** | Independent benchmark review, resilience testing, security assessment, and capacity claims. |

## Performance dimensions

Public evaluation should report multiple dimensions rather than one headline number:

- **Local responsiveness:** time and resource cost for tasks that remain on the owner's device.
- **Interaction latency:** time added when an authorized task crosses a network boundary.
- **Sustained throughput:** useful completed work over time, including verification and policy checks.
- **Resource efficiency:** computation, memory, storage, energy, and network use for a defined workload.
- **Reliability:** successful completion and correct recovery during expected operating conditions.
- **Degraded behavior:** what users experience during overload, disconnection, slow peers, or partial failure.
- **State growth:** how operational records grow and how retention policy affects capacity.
- **Coordination overhead:** work required to authorize, verify, review, and reconcile shared outcomes.
- **Privacy and safety cost:** the measurable overhead of controls that must not be bypassed for speed.

## Workload classes

Benchmarks should distinguish workloads with materially different constraints:

### Local AIA tasks

Evaluation includes startup behavior, interactive response, local retrieval, storage growth, and operation with limited connectivity. Results must identify the tested hardware and software configuration.

### Governed peer interactions

Evaluation includes authorization, connection setup, policy checks, message exchange, revocation, retries, and evidence needed for review. A fast happy path does not demonstrate safe operation under failure.

### Shared-service workflows

Future testnet work may evaluate task dispatch, provider response, verification, and test-only accounting as one end-to-end flow. Provider settlement and real rewards are not live.

### Administrative and recovery workflows

Capacity planning must include upgrades, incident containment, policy changes, audit queries, backup, restoration, and participant exit—not only normal requests.

## V1-testnet validation plan

A credible testnet report should:

1. define the exact release, configuration, workload, and measurement method;
2. separate local, network, and external-service time;
3. include normal load, burst load, long-running load, and failure scenarios;
4. report errors, retries, tail behavior, and resource use—not only averages;
5. test revocation, recovery, and policy enforcement under load;
6. disclose material limitations and unresolved bottlenecks; and
7. make enough of the harness and results available for independent review without publishing security-sensitive internals.

## Scaling principles

- Prefer local execution when it meets the user's need and policy.
- Add shared coordination only when the outcome requires it.
- Bound resource use so one participant cannot silently degrade others.
- Apply backpressure and explicit failure rather than concealing overload.
- Preserve compatibility and recovery during staged upgrades.
- Treat heterogeneous devices and connectivity as normal conditions.
- Keep observability useful for operators without turning it into user surveillance.
- Optimize after measurement, not from unverified projections.

## Release gates

SENEX should not publish production-scale claims until the relevant results are reproducible, independently reviewed, and tied to a named release. V1-testnet results would describe that test environment only; they would not automatically establish V1 capacity.

See [Applications](applications.md) for workload context, [Privacy & Security](privacy/index.md) for control requirements, and [Roadmap](roadmap.md) for the staged validation sequence.
