import React from "react";
import Overlay from "@/shared/Overlay";
import Header from "@/layout/Header";

const MainComponent = () => {
  const openNav = () => {
    // setNavClose(!navClose);
    // document.getElementById("mySidenav").style.display = "block";
    // document.getElementById("overLay").style.display = "block";
    console.log("nav");
  };
  return (
    <div className="h-screen pt-[16px] pb-[16px] pl-0 pr-0 align-top relative ml-[300px] tablet:ml-0 mobile:ml-0">
      <Overlay />
      <Header onClick={openNav} />
    </div>
  );
};

export default MainComponent;
