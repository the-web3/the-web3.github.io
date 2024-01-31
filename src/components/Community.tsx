import React from 'react';

import Link from '@docusaurus/Link';

type CommunityItem = {
  title: string;
  icon: string
  color: string
  url: string
};

const CommunityList: CommunityItem[] = [
  {
    title: 'Join Discord Community',
    icon: 'header-discord-link',
    color: 'purple',
    url: 'discordUrl',
  },
  {
    title: 'Follow our X/Twitter',
    icon: 'header-twitter-link',
    color: 'blue',
    url: 'twitterUrl',
  },
  {
    title: 'Participate in GitHub',
    icon: 'header-github-link',
    color: 'grey',
    url: 'githubUrl',
  },
];

const colors = {
  purple: 'bg-purple-400 shadow-xl shadow-purple-500/50',
  blue: 'bg-blue-500 shadow-xl shadow-blue-600/50',
  grey: 'bg-grey-400 shadow-xl shadow-grey-500/50',
};

const urls = {
  githubUrl: 'https://github.com/eniac-x-labs',
  twitterUrl: 'https://twitter.com/0xEniac x',
  discordUrl: 'https://discord.gg/9N62gJgMVW',
};

function CommunityDemo({
  title, icon, color, url,
}: CommunityItem) {
  const colorClass = colors[color];
  const urlClass = urls[url];
  return (
    <Link
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
      to={`${urlClass} `}
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
        <div className={`${icon}`} />
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-center text-xl">{title}</h3>
      </div>
    </Link>
  );
}

export default function Community(): JSX.Element {
  return (
    <section className="relative mt-5 md:mt-10 lg:mt-15">
      {/* <div className="text-center text-4xl font-bold py-5">📩 Join Us</div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 sm:px-16 sm:pb-16 pt-0">
        {CommunityList.map((props, idx) => (
          <CommunityDemo key={`Community-${idx}`} {...props} />
        ))}
      </div>
    </section>
  );
}
