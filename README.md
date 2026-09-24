# SENEXIC public documentation

This repository contains the public documentation for SENEX Intelligent Chain
and AIA. The published site is [docs.senexic.io](https://docs.senexic.io).

## Product status

SENEX is developing AIA as a local-first intelligence system centered on owner
control, governed knowledge, and proof of data: the value of data is measured by
its proven impact at the moment it is used.

The software is a local-first desktop foundation. The current milestone is
**M0 — Trust foundations**, on the path M0 to M5 toward **V1-testnet** and
**V1**. SENEXIC does not currently operate a public network, a live
contribution economy, or a production GENOME network. In the software, ASHA is
simulated accounting. See the
[current status](https://docs.senexic.io/docs/status/) page.

The documentation uses four status labels:

- **Working foundation**: implemented and covered by behaviour tests for the
  stated scope.
- **V1-testnet target**: required for V1-testnet and not yet qualified.
- **Research direction**: exploratory, with no release commitment.
- **External validation required**: dependent on independent technical, legal,
  operational, or security review.

## Public documentation boundary

This repository explains product purpose, user outcomes, trust boundaries,
current maturity, and research direction. It intentionally excludes
implementation-sensitive material such as protocol constructions, security
parameters, private infrastructure, economic formulas, and internal operating
details. Economic design is published only in the SENEX white paper.

The documentation is not an implementation specification and must not be used
to infer production readiness or financial availability.

## Local development

Requirements: Node.js 22 (see `.nvmrc`) and npm.

```bash
npm ci
npm run start
```

Before opening a pull request:

```bash
npm run check
npm run serve
```

`npm run check` type-checks the site and runs a production build. The build
fails on any broken link, anchor, image, or duplicate route.

## Publishing

The `main` branch is the source of truth. Every pull request is built and
checked. A push to `main` builds the site and publishes it to the `gh-pages`
branch, which is served through the custom domain `docs.senexic.io`.

Retired pages are kept reachable through client-side redirects in
`docusaurus.config.ts`, so external links do not break.

## License

See [LICENSE](LICENSE).
