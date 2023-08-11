import React from "react";

import IntroductionSection from "./intro";
import Testimonials from "./testimonials";
import WhatWeDoSection from "./what-we-do";
import HowItFunctions from "./how-it-functions";
import Teams from "./teams";

export const metadata = {
  title: 'About team bi0s - India\'s No.1 CTF Team & Cyber Security Research Club'
}

const AboutPage = () => (
  <div>
    <section className="min-h-[25vmin] flex items-center py-[5vh] px-6">
      <h1 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
        About bi0s
      </h1>
    </section>
    <div className="p-3">
      <IntroductionSection />
      <HowItFunctions />
      <WhatWeDoSection />
      <Teams />
      <Testimonials />
    </div>
  </div>
);

export default AboutPage;