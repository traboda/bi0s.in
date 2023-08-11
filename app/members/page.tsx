'use client';
import React, {useState} from "react";
import MemberSection from "./section";
import ADVISORS from "../../data/advisors";
import STAFF from "../../data/staff";
import STUDENTS from "../../data/students";
import ALUMNI from "../../data/alumni";

import FounderSection from "./founder";
import TableOfContents from "./toc";


const MembersPage = () => {

  const [selection, setSelection] = useState('ALL');
  const [team, setTeam] = useState('ALL');
  const [keyword, setKeyword] = useState('');
  const [campus, setCampus] = useState('ALL')

  const filterMembers = (members, isAdvisor = false) => members.filter((m) =>
    (isAdvisor || team == 'ALL' || team == m.team) &&
    (isAdvisor || campus == 'ALL' || campus?.toLowerCase() == m?.campus?.toLowerCase()) &&
    (m?.firstname?.toLowerCase().startsWith(keyword) || m?.lastname?.toLowerCase().startsWith(keyword) || m?.username?.toLowerCase().startsWith(keyword))
  );

  return (
    <React.Fragment>
      <section className="min-h-[25vmin] flex items-center py-[5vh] px-6">
        <h1 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
          Our Team
        </h1>
      </section>
      <div className="flex flex-wrap mx-0">
        <div className="w-100 lg:w-1/4 xl:w-1/5 px-2">
          <div className="sticky top-0" style={{ paddingTop: '7vh' }}>
            <TableOfContents
              campus={campus}
              setCampus={setCampus}
              setType={setSelection}
              type={selection}
              setTeam={setTeam}
              team={team}
              setKeyword={(k) => setKeyword(k.toLowerCase())}
              keyword={keyword}
            />
          </div>
        </div>
        <div className="w-100 lg:w-3/4 xl:w-4/5 px-2">
          <div style={{ height: '7.5vh' }} />
          {(selection === 'ALL') && (
            <FounderSection />
          )}
          {(selection === 'ALL' || selection === 'ADVISORS') && (
            <MemberSection
              id="advisors"
              title="Advisors"
              members={filterMembers(ADVISORS, true)}
            />
          )}
          {(selection === 'ALL' || selection === 'STAFF') && (
            <MemberSection
              id="staff"
              title="Staff Mentors"
              members={filterMembers(STAFF)}
            />
          )}
          {(selection === 'ALL' || selection === 'STUDENTS') && (
            <MemberSection
              id="students"
              title="Student Members"
              members={filterMembers(STUDENTS)}
              isStudent
            />
          )}
          {(selection === 'ALL' || selection === 'ALUMNI') && (
            <MemberSection
              id="alumni"
              title="Alumni"
              members={filterMembers(ALUMNI)}
              isAlumni
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default MembersPage;