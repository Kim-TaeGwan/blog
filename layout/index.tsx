import React, { FC } from "react";
import SideMenu from "./SideMenu";

const Layout: FC = ({ children }) => {
  const closeNav = () => {
    //   document.getElementById("mySidenav").style.display = "none";
    //   document.getElementById("overLay").style.display = "none";
  };
  return (
    <div
      className="w-screen h-screen text-[20px] overflow-auto relative bg-[#f1f1f1]"
      id="layout"
    >
      <div id="container" className="bg-cover m-auto">
        <SideMenu onClick={closeNav} />
        {children}
      </div>
    </div>
  );
};

export default Layout;