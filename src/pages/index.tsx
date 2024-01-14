import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/Features';
import Circles from '@site/src/components/circles';
import Quickstart from '@site/src/components/Quickstart';
import Community from '@site/src/components/Community';
import Sponsors from '@site/src/components/Sponsors';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header>
      <div className="bottom-0 w-screen left-1/2 top-24 ml-3 mt-10 pt-0 md:pt-0 sm:-ml-5 md:ml-auto flex justify-end right-12 md:top-auto md:left-auto md:-right-12 md:justify-center absolute md:w-2/3 sm:top-20 m-auto lg:w-1/2">

        <img
          className="dark:block pointer-events-none hidden object-contain z-10 w-full md:w-1/2"
          src="./img/logo.png"
          alt="logo"
        />

        <img
          className="dark:hidden pointer-events-none sm:block object-contain z-10 w-full md:w-1/2"
          src="./img/logo.png"
          alt="logo"
        />
      </div>

      <div className="px-5 sm:px-12 md:px-16 relative mx-auto pt-10 md:pt-24">
        <h1 className="text-[32px] sm:text-[40px] mt-10 lg:mt-16 md:mt-0 md:text-[45px] lg:text-[63px] leading-10 md:leading-8 font-black text-indigo-700">
          Welcome to
          <span className="font-extralight mt-4 md:mt-8 lg:mt-0 text-[66px] sm:text-[83px] md:text-[92px] lg:text-9xl block text-blue-500 dark:text-blue-600">Savour Labs</span>
        </h1>
        <p className="mt-6 pr-20 sm:pr-0 sm:mt-12 lg:mt-5 w-full sm:w-2/3 md:w-1/2 text-xl font-bold ml-1 text-slate-700 dark:text-white">
          {siteConfig.tagline}
          <span className="ml-1 text-xl text-slate-400">
            The vision of the Savour community is to create a completely fair,
            open, and notarized community culture system; everything is built
            by the community, everything belongs to the community.
          </span>
        </p>

        <div className="py-10">
          <Link
            className="transition-all ease-in hover:bg-blue-700 hover:text-white hover:text text-md text-white font-bold py-3 px-4 rounded bg-blue-500 shadow-lg shadow-blue-500/50"
            to="/docs/Documents/intro"
          >
            Get started
            <span className="ml-3">🚀</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome from ${siteConfig.title}`}
      description="Savour Labs"
      wrapperClassName="relative overflow-hidden"
    >
      <div className="relative max-w-7xl m-auto w-full opacity-40">
        <div className="animate-blob opacity-80 absolute top-0 -right-10 md:top-0 md:right-0 bg-gradient-to-r from-indigo-600 via-blue-700 to-blue-400 h-[210px] w-[210px] md:h-[350px] md:w-[350px] lg:h-[382px] lg:w-[382px]" style={{ borderRadius: '30% 70% 67% 33% / 64% 30% 70% 36%' }} />
        <div className="animate-blob-delay-1 opacity-80 absolute top-0 right-32 md:top-[250px] md:right-1/4 lg:right-60 bg-gradient-to-r from-blue-600 via-pink-700 to-pink-400 h-[180px] w-[180px] md:h-[230px] md:w-[230px] lg:h-[282px] lg:w-[282px]" style={{ borderRadius: '30% 70% 67% 33% / 64% 30% 70% 36%' }} />
      </div>

      <div className="backdrop-blur-xl">

        <div className="relative max-w-7xl m-auto">
          <div className="absolute top-[800px]">
            <Circles animate="animate-circle-delay-1" />
          </div>
          <div className="absolute top-[400px] right-0">
            <Circles color="white" />
          </div>
          <HomepageHeader />
        </div>

        <main className="relative">
          <div className="relative max-w-7xl m-auto">
            <HomepageFeatures />
          </div>

          <div className="relative max-w-7xl m-auto">
            <Community />
          </div>

          <div className="relative max-w-7xl m-auto">
            <Sponsors />
          </div>

          <svg className="-mb-[1px] bottom-0 w-full sm:-mt-20 fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="current" fillOpacity="1" d="M0,320L60,272C120,224,240,128,360,128C480,128,600,224,720,234.7C840,245,960,171,1080,122.7C1200,75,1320,53,1380,42.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </svg>
          <Quickstart />
          <svg className="-mb-[1px] pointer-events-none absolute bottom-0 sm:bottom-[169px] sm:bottom-[99px] lg:bottom-[269px] w-full sm:-mt-20 fill-neutral-100 dark:fill-neutral-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="current" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </main>
      </div>
    </Layout>
  );
}
