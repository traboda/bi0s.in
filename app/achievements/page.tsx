'use client';

import React, {useState} from "react";
import ACHIEVEMENTS from '../../data/achievements';

import TableOfContentsAchievements from "./toc";
import AchievementCard from "./card";

const AchievementsPage = () => {

  const [type, setType] = useState('ALL');

  return (
    <React.Fragment>
      <div className="flex flex-wrap mx-0">
        <div className="w-100 lg:w-1/4 xl:w-1/5 px-2">
          <div className="sticky top-0" style={{ paddingTop: '7.5vh' }}>
            <TableOfContentsAchievements type={type} setType={setType} />
          </div>
        </div>
        <div className="w-100 lg:w-3/4 xl:w-4/5 px-2">
          <div style={{ height: '7.5vh' }} />
          {ACHIEVEMENTS.filter((s) => (
            type == 'ALL' || s.type == type
          )).map((s, index) => (
            <div key={`si_${index}`}>
              <AchievementCard {...s} />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default AchievementsPage;