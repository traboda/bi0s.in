import React from "react";
import Image from "next/image";
import Link from "next/link";


const ASSETS = [
  {
    name: 'light-logo',
    path: '/branding/light-logo.png',
    isLight: true,
  },
  {
    name: 'dark-logo',
    path: '/branding/dark-logo.png',
  },
  {
    name: 'animated-logo',
    path: '/branding/logo-animated.gif',
    isLight: true,
  },
  {
    name: 'favicon',
    path: '/branding/favicon.png',
  },
  {
    name: 'logo-on-black',
    path: '/branding/logo-on-black.png',
    isLight: true
  },
  {
    name: 'logo-on-white',
    path: '/branding/logo-on-white.png',
  }
]

export const metadata = {
  title: 'Brand Kit | team bi0s - India\'s No.1 Ranked CTF Team',
}

const BrandingPage = () => (
  <React.Fragment>
    <section className="min-h-[25vmin] flex items-center py-[5vh] px-6">
      <div>
          <h1 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
            Brand Kit
          </h1>
          <p className="my-3 opacity-80">
            Official collection of team bi0s brand assets.
          </p>
      </div>
    </section>
    <div className="p-4">
      <div className="flex flex-wrap mx-0">
        {ASSETS.map((asset, index) => (
          <div key={`si_${index}_${asset.name}`} className="w-100 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="p-8" style={{ backgroundColor: asset.isLight ? '#222' : '#DDD' }}>
              <Link target="_blank" href={`/branding/${asset.name}.png`}>
                <Image className="filter-none" src={asset.path} alt={asset.name} width={300} height={300} />
              </Link>
              <div className="mt-2" style={{ color: asset.isLight ? '#EEE' : '#111' }}>
                {asset.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </React.Fragment>
);

export default BrandingPage;