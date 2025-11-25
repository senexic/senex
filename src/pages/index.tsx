import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="text--center">
          <div className="badge badge--secondary margin-bottom--md">SENEX INTELLIGENT CHAIN</div>
          <Heading as="h1" className="hero__title" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>
            The World's First Truly Decentralized AI Network
          </Heading>
          <p className="hero__subtitle" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
            A revolutionary blockchain ecosystem where AI agents live, evolve, and collaborate securely.
          </p>
          <div className={styles.buttons} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', padding: '0 1rem' }}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/architecture"
              style={{ width: '100%', maxWidth: '400px' }}>
              Read Technical Whitepaper
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              to="/docs/aia"
              style={{ width: '100%', maxWidth: '400px' }}>
              Explore AIA Agentsd
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="The World's First Truly Decentralized AI Network">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--4">
              <div className="card padding--lg h-100">
                <div className="text--center">
                  <Heading as="h3">AIA Companions</Heading>
                  <p>
                    Personal AI agents that evolve with you. Your digital twin in the Senex ecosystem,
                    capable of autonomous interaction and growth.
                  </p>
                  <Link className="button button--link" to="/docs/aia">Learn about AIA &rarr;</Link>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="card padding--lg h-100">
                <div className="text--center">
                  <Heading as="h3">GENOME</Heading>
                  <p>
                    The global brain of the network. A decentralized, self-evolving AI model
                    running across thousands of validator nodes.
                  </p>
                  <Link className="button button--link" to="/docs/architecture/genome">Explore GENOME &rarr;</Link>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="card padding--lg h-100">
                <div className="text--center">
                  <Heading as="h3">Intelligent Chain</Heading>
                  <p>
                    A high-performance blockchain optimized for AI computation, ensuring
                    privacy, scalability, and secure agent interactions.
                  </p>
                  <Link className="button button--link" to="/docs/architecture/intelligent_chain">View Architecture &rarr;</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row margin-top--xl">
            <div className="col col--12 text--center">
              <Heading as="h2" className="margin-bottom--lg">Why Senex?</Heading>
            </div>
            <div className="col col--6">
              <div className="padding--md">
                <Heading as="h4">Privacy First</Heading>
                <p>Differential privacy guarantees (ε=1.0) ensure your data remains yours, even while training the global model.</p>
              </div>
            </div>
            <div className="col col--6">
              <div className="padding--md">
                <Heading as="h4">True Decentralization</Heading>
                <p>No central authority controls the AI. The network is governed by the community and the AI itself.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
