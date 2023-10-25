import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useColorMode} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {colorMode, setColorMode} = useColorMode();
  console.log('siteConfig', colorMode, siteConfig);
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <img src={`/img/index/banner_${colorMode}.svg`} alt="banner" />
      <div className={clsx(styles.headerContainer)}>
      <h1 className="hero__title">{siteConfig.title}</h1>
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/📄 Documents/intro">
            💡 Savour Labs Docs
          </Link>
          </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome from ${siteConfig.title}`}
      description="Savour Labs creates a decentralized platform that includes a NFT aggregator, social recovery wallet, gameFi, decentralized finance, and other Dapp services.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
