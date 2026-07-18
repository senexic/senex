# SENEXIC public documentation

This repository contains the public documentation for SENEXIC and AIA. The
published site is available at [docs.senexic.io](https://docs.senexic.io).

## Product status

SENEXIC is developing AIA as a local-first intelligence system centered on
owner control, governed knowledge, and verifiable contribution.

The current codebase provides working local foundations for AIA. It is being
prepared for a future **V1-testnet** qualification stage. SENEXIC does not
currently operate a live public blockchain, transferable token, public reward
economy, or production GENOME network.

The documentation uses four status labels:

- **Working foundation** — demonstrated locally for the stated scope.
- **V1-testnet target** — required for the intended production-candidate test
  network.
- **Research direction** — exploratory or post-V1 work.
- **External validation required** — dependent on independent technical,
  legal, operational, or security review.

## Public documentation boundary

This repository explains product purpose, user outcomes, trust boundaries,
current maturity, and research direction. It intentionally excludes
implementation-sensitive material such as protocol constructions, security
parameters, private infrastructure, economic formulas, and internal operating
details.

The public documentation is not an implementation specification and must not
be used to infer production readiness or financial availability.

## Local development

Requirements: Node.js 20 or newer and npm.

```bash
npm ci
npm run start
```

Before publishing:

```bash
npm run typecheck
npm run build
npm run serve
```

## Publishing

The `main` branch is the source of truth. A verified Docusaurus build is
published to the `gh-pages` branch and served through the custom domain
`docs.senexic.io`.

## License

See [LICENSE](LICENSE).
