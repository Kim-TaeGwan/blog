import React, { FC, useCallback, useState } from "react";
import SideMenu from "./SideMenu";
import Overlay from "@/shared/Overlay";
import Header from "@/layout/Header";

interface Props {
  children: any;
}
const Layout: FC<Props> = ({ children }) => {
  const [isSideMenu, setIsSideMenu] = useState(false);
  const [isOverlay, setIsOverlay] = useState(false);

  const openNav = useCallback(() => {
    setIsSideMenu(true);
    setIsOverlay(true);
  }, []);

  const closeNav = () => {
    setIsSideMenu(false);
    setIsOverlay(false);
    //   document.getElementById("mySidenav").style.display = "none";
    //   document.getElementById("overLay").style.display = "none";
    console.log("closeNav");
  };
  return (
    <div
      className="w-screen h-screen text-[20px] overflow-auto relative bg-[#f1f1f1]"
      id="layout"
    >
      <div id="container" className="bg-cover m-auto">
        <SideMenu onClick={closeNav} isMenu={isSideMenu} />
        <div className="h-screen pt-[16px] pb-[16px] pl-0 pr-0 align-top relative ml-[300px] tablet:ml-0 mobile:ml-0">
          <Overlay isOverlay={isOverlay} />
          <Header onClick={openNav} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
