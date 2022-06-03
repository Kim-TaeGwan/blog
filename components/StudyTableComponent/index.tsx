import React from "react";
import StudyTable from "@/components/StudyTableComponent/StudyTable";
import Overlay from "@/shared/Overlay";
// import Header from "@/layout/Header";

const StudyTableComponent = ({ list }: any) => {
  return (
    <div
      className="h-screen pt-[16px] pb-[16px] pl-0 pr-0 align-top relative
     {/*ml-[300px] */}
     tablet:ml-0 mobile:ml-0"
    >
      <Overlay />
      <StudyTable list={list} />
    </div>
  );
};

export default StudyTableComponent;
