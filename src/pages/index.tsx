import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const foundations = [
  {
    eyebrow: 'Working foundation',
    title: 'Local-first AIA',
    body:
      'AIA is being built to operate around the owner, use approved local resources, and keep sensitive context under explicit control.',
    link: '/docs/architecture/aia_agents',
    label: 'Explore AIA',
  },
  {
    eyebrow: 'Working foundation',
    title: 'Governed knowledge',
    body:
      'Knowledge access is intended to be bounded by purpose, permission, provenance, and revocation—not unrestricted collection.',
    link: '/docs/privacy',
    label: 'Review the trust model',
  },
  {
    eyebrow: 'Working foundation',
    title: 'Proof before value',
    body:
      'Local simulations explore contribution recognition through evidence and verification. Public settlement and transferable value are not live.',
    link: '/docs/tokenomics',
    label: 'Read the economy principles',
  },
];

const maturity = [
  {
    label: 'Working foundation',
    text: 'Local AIA, governed retrieval and memory, encrypted local content foundations, owner-authorized devices, and local contribution simulations.',
  },
  {
    label: 'V1-testnet target',
    text: 'A production-candidate test environment intended to use test-only value, reviewed releases, and independently evidenced behavior.',
  },
  {
    label: 'Research direction',
    text: 'Intelligent Chain verification and settlement, followed by post-V1 exploration of collective intelligence through GENOME.',
  },
];

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>SENEX / AIA</div>
          <Heading as="h1" className={styles.heroTitle}>
            Sovereign intelligence,
            <span> built around the owner.</span>
          </Heading>
          <p className={styles.heroSubtitle}>
            AIA is SENEXIC&apos;s local-first intelligence direction: owner-controlled
            context, governed knowledge, and verifiable contribution—with a clear
            boundary between working foundations and future network goals.
          </p>
          <div className={styles.heroActions}>
            <Link
              className="button button--primary button--lg"
              to="/docs/architecture/aia_agents">
              Explore AIA
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              to="/docs/roadmap">
              View current status
            </Link>
          </div>
          <p className={styles.heroDisclosure}>
            No live public blockchain · No transferable token · No public reward
            economy
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="SENEXIC — AIA documentation"
      description="Public capability, trust, and maturity documentation for SENEXIC and AIA.">
      <HomepageHeader />
      <main>
        <section className={styles.statusSection} aria-labelledby="maturity-heading">
          <div className="container">
            <div className={styles.sectionIntro}>
              <div className={styles.eyebrow}>Maturity without ambiguity</div>
              <Heading as="h2" id="maturity-heading">
                One direction. Clearly separated stages.
              </Heading>
              <p>
                Every public capability is presented as a working foundation,
                V1-testnet target, research direction, or item requiring external
                validation.
              </p>
            </div>
            <div className={styles.statusGrid}>
              {maturity.map((item) => (
                <article className={styles.statusItem} key={item.label}>
                  <span>{item.label}</span>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.foundationSection} aria-labelledby="foundations-heading">
          <div className="container">
            <div className={styles.sectionIntro}>
              <div className={styles.eyebrow}>The working center</div>
              <Heading as="h2" id="foundations-heading">
                Intelligence that begins with authority.
              </Heading>
              <p>
                SENEXIC starts with the owner and expands outward only through
                explicit, bounded participation.
              </p>
            </div>
            <div className={styles.cardGrid}>
              {foundations.map((item) => (
                <article className={styles.card} key={item.title}>
                  <span className={styles.cardEyebrow}>{item.eyebrow}</span>
                  <Heading as="h3">{item.title}</Heading>
                  <p>{item.body}</p>
                  <Link to={item.link}>{item.label} →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.boundarySection} aria-labelledby="boundaries-heading">
          <div className="container">
            <div className={styles.boundaryPanel}>
              <div className={styles.boundaryCopy}>
                <div className={styles.eyebrow}>Trust boundaries</div>
                <Heading as="h2" id="boundaries-heading">
                  From private context to governed contribution.
                </Heading>
                <p>
                  The public architecture is described by responsibility, not by
                  reproducible internals. Each boundary answers who controls access,
                  what may cross, and what evidence is required.
                </p>
                <Link className="button button--secondary" to="/docs/architecture">
                  See the architecture
                </Link>
              </div>
              <div className={styles.boundaryFlow} role="list">
                <div className={styles.boundaryNode} role="listitem">
                  <span>01</span>
                  <strong>Owner and devices</strong>
                  <small>Local context and explicit authority</small>
                </div>
                <div className={styles.boundaryNode} role="listitem">
                  <span>02</span>
                  <strong>Governed collaboration</strong>
                  <small>Purpose-bounded, revocable participation</small>
                </div>
                <div className={styles.boundaryNode} role="listitem">
                  <span>03</span>
                  <strong>Verified outcomes</strong>
                  <small>Evidence before attribution or settlement</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.closingSection}>
          <div className="container">
            <div className={styles.closingPanel}>
              <div>
                <div className={styles.eyebrow}>Power of Equality</div>
                <Heading as="h2">Build capability without surrendering agency.</Heading>
              </div>
              <div className={styles.closingActions}>
                <Link className="button button--primary" to="/docs/">
                  Read the documentation
                </Link>
                <Link className="button button--outline button--secondary" to="/docs/privacy">
                  Review trust and privacy
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
