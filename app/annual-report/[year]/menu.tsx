'use client';

import React from "react";

const BlogMenu = ({ titles }) => {

  const [hasScrolled, setHasScrolled] = React.useState(false);

  const [topHeight, setTopHeight] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    const topbar = document.getElementById('topbar')
    if (topbar) {
      setTopHeight(topbar.clientHeight);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
        className="sticky"
        style={{
          top: hasScrolled ? topHeight + 25 : 0,
        }}
    >
      <div className="text-sm opacity-60 uppercase font-semibold mb-3">
        On this page
      </div>
      <ul className="flex flex-col gap-3">
        {(titles && titles?.length) && titles.map(({ label, slug }, index) => (
          <li key={`${slug}_${index}`}>
            <a href={`#${slug}`} className="leading-2 text-sm opacity-80">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

};


export default BlogMenu;