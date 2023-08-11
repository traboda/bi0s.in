import Link from "next/link";
import Image from "next/image";
import React from "react";

type MemberCardProps = {
  firstname: string;
  lastname: string;
  username?: string;
  category?: string;
  affiliation?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const MemberCard = ({
  firstname, lastname, username, category, affiliation, linkedin, twitter, email
}: MemberCardProps) => (
    <div className="w-100 sm:w-1/2 lg:w-1/3 p-3">
        {username && <div className="text-2xl">{username}</div>}
        <div className={`mb-1 opacity-90 uppercase ${!(username && username?.length > 0) ? 'text-xl' : null}`}>
            <span className="font-semibold">{firstname}</span>
            {' '}{lastname}
        </div>
        {category && <div className="text-sm opacity-80">{category}</div>}
        {affiliation && <div className="text-sm opacity-80">{affiliation}</div>}
        <div className="flex items-center gap-2 opacity-75 mt-3">
            {twitter && (
                <Link href={`https://www.twitter.com/${twitter}`} target="_blank" className="ri-twitter-fill text-lg" />
            )}
            {linkedin && (
                <Link href={`https://www.linkedin.com/in/${linkedin}`} target="_blank" className="ri-linkedin-fill text-lg" />
            )}
            {email && (
                <Link href={`mailto:${email}`} target="_blank" className="ri-mail-line text-lg" />
            )}
        </div>
    </div>
);

export default MemberCard;
