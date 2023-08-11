import React from "react";
import Link from "next/link";

const FounderSection = () => (
    <section className="p-3">
        <div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Founder & Chief Mentor</div>
            <div className="text-lg md:text-xl lg:text-2xl opacity-80 font-semibold mb-2">
                Th3_M3nt0r
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl uppercase mb-3 font-semibold">
                Vipin Pavithran
            </div>
            <p className="text-sm opacity-70">
                Vipin Pavithran is a cyber-security veteran and the founder of team bi0s, and takes deep passion in
                mentoring students at Amrita Vishwa Vidyapeetham. Prior to coming to Amritapuri, he has worked for
                over 10 years in the software industry in the USA & UK. Being passionate about helping students to
                develop their talent and to make them reach their potential, he founded the internationally recognised
                student clubs - amFOSS, Team bi0s and Team Shakti, and today mentors over 300 engineering students
                directly through these clubs. team bi0s was amongst India&apos;s first CTF team when it was formed in 2007,
                and it was this team that founded the InCTF in 2010, which was the first-ever CTF contest to be
                organized in India.
            </p>
            <div className="flex items-center gap-3 mt-6">
                <Link href="https://twitter.com/th3_m3nt0r" className="ri-twitter-fill text-2xl" />
                <Link href="https://www.linkedin.com/in/vipin-pavithran/" className="ri-linkedin-fill text-2xl" />
                <Link href={`mailto:vipinp@am.amrita.edu`} className="ri-mail-line text-2xl" />
            </div>
        </div>
    </section>
);

export default FounderSection;