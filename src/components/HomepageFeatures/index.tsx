import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Our Target',
    Svg: require('@site/static/img/index/quick_start.svg').default,
    description: (
      <>
        Savour Labs's Vision is to Build an All-in-One Web3 Solution.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/index/work.svg').default,
    description: (
      <>
        Savour Labs focuses on Web3, DeFi, NFT, GameFi, SocialFi, and more.
      </>
    ),
  },
  {
    title: 'Detailed documentation',
    Svg: require('@site/static/img/index/doc.svg').default,
    description: (
      <>
        Everything about Savour Labs Products.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
