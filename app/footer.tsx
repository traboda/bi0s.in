import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="flex flex-wrap py-8">
    <div className="w-100 md:w-1/2 flex items-center text-center md:text-left justify-center md:justify-start p-2 text-sm opacity-80">
      &copy; Team bi0s 2007 - {new Date().getFullYear()}. All rights reserved.
    </div>
    <div className="w-100 md:w-1/2 p-2 flex justify-center text-xl gap-3 md:justify-end items-center">
      <Link href="https://ctftime.org/team/662" target="_blank" rel="nofollow noreferrer">
        <Image className="cursor-pointer filter-none" alt="CTFTime Profile" src="/ctftime.svg" width={90} height={45} />
      </Link>
      <Link href="mailto:amritabi0s1@gmail.com" className="ri-mail-line" />
      <Link href="https://twitter.com/teambi0s" className="ri-twitter-fill" />
      <Link href="https://github.com/teambi0s" className="ri-github-fill" />
      <Link href="https://linkedin.com/company/teambi0s" className="ri-linkedin-fill" />
    </div>
  </footer>
);

export default Footer;