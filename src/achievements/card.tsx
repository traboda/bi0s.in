import React from "react";
import styled from "@emotion/styled";

const AchievementCardSection = styled('div')`
  p {
    color: ${({theme}) => theme.isDarkTheme ? '#AAA' : '#333'};
    b {
      color: ${({theme}) => theme.isDarkTheme ? '#FFF' : '#000'};
      opacity: 1!important;
    }
  }
`;

const AchievementCard = ({ text, infoText = null, date = null, links = [] }) => (
    <AchievementCardSection className="py-5 border-dashed border-opacity-60 border-b-2">
        <div className="flex items-center opacity-80 mb-3">
            <div className="w-100 md:w-2/3">
                <div>{infoText}</div>
            </div>
            <div className="w-100 md:w-1/3 flex justify-end text-sm font-semibold mr-4">
                {date}
            </div>
        </div>
        <p className="my-3">{text}</p>
        {links?.length > 0 && (
            <div className="md:flex items-center text-sm mt-3">
                {links.map((s, index) => (
                    <a href={s.href} className="font-semibold opacity-70 hover:opacity-100 mr-2" key={`link_${index}`}>
                        {s.text} {'>'}
                    </a>
                ))}
            </div>
        )}
    </AchievementCardSection>
);

export default AchievementCard;