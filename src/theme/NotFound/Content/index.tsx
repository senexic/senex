import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import type {Props} from '@theme/NotFound/Content';

export default function NotFoundContent({className}: Props): ReactNode {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1">Page not found</Heading>
          <p>
            This page does not exist, or it has moved. Some older pages were
            renamed or retired when the documentation was reorganized.
          </p>
          <ul>
            <li>
              <Link to="/docs/">SENEX documentation overview</Link>
            </li>
            <li>
              <Link to="/docs/status/">Current status</Link>
            </li>
            <li>
              <Link to="/search/">Search the documentation</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
