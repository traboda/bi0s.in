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
    <ul
      className="flex sticky flex-col gap-3"
      style={{
        top: hasScrolled ? topHeight + 15 : 0,
      }}
    >
      {(titles && titles?.length) && titles.map(({ label, slug }, index) => (
        <li key={`${slug}_${index}`}>
          <a href={`#${slug}`} className="leading-2 text-sm opacity-80">
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

};


export default BlogMenu;