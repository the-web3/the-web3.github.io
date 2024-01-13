import React from 'react';

type SponsorItem = {
  url: string;
};

const SponsorList: SponsorItem[] = [
  {
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WMD1NuwHNFJDQnD7VZw_jAHaEK%26pid%3DApi&f=1&ipt=86569a693ce6ce5ffca700c7465e48b2031a9c3611a64a0bc9e3fd37774a2eab&ipo=images',
  },
  {
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.a9YEk7PFWeB9KJ6KncP-7AHaEK%26pid%3DApi&f=1&ipt=956c3ce7084ae9ada7e9c00b6f90242ca1c2ddb3d0491c2601049b5438c493c2&ipo=images',
  },
  {
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.5R3086luJcz2QBkyzbKCNwHaEK%26pid%3DApi&f=1&ipt=4478748494e4269484997ac75fefa200b4aadc412d845c7760d7efce99b00c48&ipo=images',
  },
];

function Sponsor({
  url,
}: SponsorItem) {
  return (
    <img
      src={`${url}`}
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
      <div className="text-center text-4xl font-bold py-5 mb-5">🤝 Sponsors</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 sm:px-16 sm:pb-16 pt-0 mt-5">
        {SponsorList.map((props, idx) => (
          <Sponsor key={`Sponsor-${idx}`} {...props} />
        ))}
      </div>
    </section>
  );
}
