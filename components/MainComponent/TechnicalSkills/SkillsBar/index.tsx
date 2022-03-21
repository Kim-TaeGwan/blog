import React, { CSSProperties, FC } from "react";

interface Props {
  skillTitle: string;
  percent: string;
  style: CSSProperties;
}
const SkillsBar: FC<Props> = ({ skillTitle, percent, style }) => {
  return (
    <div className="SkillsBar">
      <span className="text-[15px] inline-block mt-[15px]">{skillTitle}</span>
      <div className="w-full h-[38px] leading-[38px] bg-[#9e9e9e]">
        <div
          className=" bg-[#616161] text-center text-white h-full text-[15px]"
          style={style}
        >
          {percent}
        </div>
      </div>
    </div>
  );
};

export default SkillsBar;
