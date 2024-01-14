import React from 'react';
import Translate from '@docusaurus/Translate';

import googleLogo from '../../static/logos/google.png';
import youtubeLogo from '../../static/logos/youtube.png';
import bitcoinLogo from '../../static/logos/bitcoin.png';

type SponsorItem = {
  url: string;
};

const SponsorList: SponsorItem[] = [
  {
    url: googleLogo,
  },
  {
    url: youtubeLogo,
  },
  {
    url: bitcoinLogo,
  },
];

function Sponsor({
  url,
}: SponsorItem) {
  return (
    <img
      src={url}
      alt="Sponsor Logo"
      className="
            w-64
            max-w-64
            h-auto
            transition-all
            ease-in
            hover:scale-105
            object-cover
          "
    />
  );
}

export default function Sponsors(): JSX.Element {
  return (
    <section className="relative mt-10 md:mt-20 lg:mt-30">
      <div className="text-center text-4xl font-bold py-5"><Translate>🤝 Sponsors</Translate></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 sm:px-16 sm:pb-16 pt-0">
        {SponsorList.map((props, idx) => (
          <Sponsor key={`Sponsor-${idx}`} {...props} />
        ))}
      </div>
    </section>
  );
}
