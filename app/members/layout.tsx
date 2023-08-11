import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Team Members | team bi0s - India\'s No.1 Ranked CTF Team & Cyber Security Research Club',
  description: 'Meet the team members of team bi0s.',
}

const Achievements = ({ children }) => (
  <React.Fragment>
    <section className="min-h-[25vmin] flex items-center py-[5vh] px-6">
      <h1 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
        Our Team
      </h1>
    </section>
    {children}
  </React.Fragment>
);

export default Achievements;