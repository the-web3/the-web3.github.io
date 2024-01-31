import React from 'react';

type FeatureItem = {
  title: string;
  icon: string
  color: string
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Layer3 App Chain',
    icon: '🔗',
    color: 'yellow',
    description: (
      <>
        We are building layer3 privacy social and full-game protocol app chain.
      </>
    ),
  },
  {
    title: 'Full chain game',
    icon: '🎮',
    color: 'green',
    description: (
      <>
        We find and incubate full-chain games.
      </>
    ),
  },
  {
    title: 'Bridge alchemy',
    icon: '🌉',
    color: 'cyan',
    description: (
      <>
        An infrastructure which support any chain transfer to any chain.
      </>
    ),
  },
  {
    title: 'Focus on web3 edu',
    icon: '🏫',
    color: 'orange',
    description: (
      <>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Eniac x labs academy web3 university
      </>
    ),
  },
];

const colors = {
  yellow: 'bg-yellow-300 shadow-xl shadow-yellow-500/50',
  green: 'bg-green-400 shadow-xl shadow-green-500/50',
  orange: 'bg-orange-400 shadow-xl shadow-orange-500/50',
  cyan: 'bg-cyan-400 shadow-xl shadow-cyan-500/50',
};

function Feature({
  title, icon, color, description,
}: FeatureItem) {
  const colorClass = colors[color];
  return (
    <div
      className="
        transition-all
        ease-in
        flex
        items-center
        bg-slate-100/40
        dark:bg-slate-800/40
        backdrop-blur-xl
        rounded-xl
        p-4
        hover:shadow-xl
        hover:cursor-pointer
     "
    >
      <div
        className={`
          flex 
          items-center 
          justify-center 
          ${colorClass} 
          border-sm 
          w-[50px] 
          h-[50px] 
          min-w-[50px] 
          min-h-[50px] 
          mr-4 
          rounded-xl
        `}
      >
        <p className="text-2xl">{icon}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold mb-4">{title}</h3>
        <p className="text-xs text-slate-500 dark:text-slate-300">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 sm:px-16 sm:pb-16 pt-0">
        {FeatureList.map((props, idx) => (
          <Feature key={`feature-${idx}`} {...props} />
        ))}
      </div>
    </section>
  );
}
