import React from "react";
// import PartTitle from 'src/components/common/PartTitle';
import SkillsBar from "./SkillsBar";

const TechnicalSkills = () => {
  return (
    <div className=" py-0 px-[16px] ">
      <h4 className="part_title my-[10px] mx-0 font-normal">
        Technical Skills
      </h4>
      <SkillsBar
        skillTitle="Front-End"
        percent="80%"
        style={{ width: "80%" }}
      />
      <SkillsBar skillTitle="Back-End" percent="20%" style={{ width: "20%" }} />
      {/* <SkillsBar skillTitle="PhotoShop" percent="80%" style={{ width: '80%' }} /> */}
      <hr />
    </div>
  );
};

export default TechnicalSkills;
