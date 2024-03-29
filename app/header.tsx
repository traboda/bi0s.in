'use client';
import React, {useContext, useState} from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import clsx from "clsx";
import {Theme} from "./themeContext";

const HeaderBar = styled.header`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: 0.25s background ease-in-out;
  position: sticky;
  width: 100%;
  left: 0;
  padding: 0.75rem;
  top: 0;
  z-index: 5000;
`;

const MenuContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  font-weight: 600;
  li {
    margin-right: 0.5vw;
    padding: 0.25rem 0.5rem;
    border-radius: 7px;
    &:hover {
      background: ${({ theme }) =>  theme.isDarkTheme ? 'rgba(255,255,255,0.05)' : 'rgba(0, 0, 0, 0.05)' };
    }
  }
  li:last-of-type {
    margin-right: 0;
  }
`;
type MobileMenuContainer = {
  isOpen?: boolean
};

const MobileMenuContainer = styled.ul<MobileMenuContainer>`
  list-style: none;
  font-weight: 600;
  height: ${({ isOpen }) => isOpen ? `${4 * MENU_ITEMS.length}rem` : 0};
  transition: 0.5s height ease;
  overflow: hidden;
  li {
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
  li:last-of-type {
    border-bottom: none;
  }
`;

const MENU_ITEMS = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "About",
    href: "/about"
  },
  // {
  //     label: "Projects",
  //     href: "/projects"
  // },
  // {
  //     label: "Teams",
  //     href: "/teams"
  // },
  {
    label: "Members",
    href: "/members"
  },
  {
    label: "Achievements",
    href: "/achievements"
  },
  {
    label: "Blog",
    href: "https://blog.bi0s.in"
  }
]

const MenuItem = ({ href, label }) => (
  <li>
    <Link href={href} className="text-lg">
      {label}
    </Link>
  </li>
);

const Header = () => {

  const [isOpen, setOpen] = useState(false);

  const { isDarkTheme, setDarkTheme } = useContext(Theme);

  return (
    <React.Fragment>
      <HeaderBar id="topbar">
        <div className="flex justify-center">
          <div style={{ width: '1100px', maxWidth: '100%' }}>
            <div className="flex flex-wrap mx-0">
              <div className="w-1/2 lg:w-1/4 flex items-center px-2">
                <Link href="/">
                  <img
                    alt="Team bi0s"
                    src="/dark-logo.png"
                    width={106}
                    height={37}
                    style={{
                      filter: isDarkTheme ? 'invert(1)' : undefined,
                    }}
                  />
                </Link>
              </div>
              <div className="w-1/2 lg:w-3/4 flex items-center justify-end px-2">
                <div className="hidden flex items-center md:block">
                  <MenuContainer>
                    {MENU_ITEMS.map((i) => (
                      <MenuItem key={i.href} {...i} />
                    ))}
                    <button
                      title={isDarkTheme ? 'Light Mode' : 'Dark Mode'}
                      className={clsx(['ml-4 flex items-center text-lg', isDarkTheme ? 'ri-sun-line' : 'ri-moon-line'])}
                      onClick={() => setDarkTheme(!isDarkTheme)}
                    />
                  </MenuContainer>
                </div>
                <div className="flex items-center md:hidden">
                  <button
                    className={clsx(['mr-3 flex items-center text-lg', isDarkTheme ? 'ri-sun' : 'ri-moon'])}
                    onClick={() => setDarkTheme(!isDarkTheme)}
                  />
                  <button
                    className={clsx(['flex items-center text-2xl', isOpen ? 'ri-close-fill' : 'ri-menu-fill'])}
                    onClick={() => setOpen(!isOpen)}
                  />
                </div>
              </div>
            </div>
            <MobileMenuContainer isOpen={isOpen} className={isOpen ? "py-3" : ''}>
              {MENU_ITEMS.map((i) => (
                <MenuItem key={i.href} {...i} />
              ))}
            </MobileMenuContainer>
          </div>
        </div>
      </HeaderBar>
    </React.Fragment>
  );
}

export default Header;