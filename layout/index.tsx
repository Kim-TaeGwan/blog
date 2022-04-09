import React, { FC } from "react";
import SideMenu from "./SideMenu";
import { RecoilRoot } from "recoil";

interface Props {
  children: React.ReactElement;
}
const Layout: FC<Props> = ({ children }) => {
  const closeNav = () => {
    //   document.getElementById("mySidenav").style.display = "none";
    //   document.getElementById("overLay").style.display = "none";
  };
  return (
    <RecoilRoot>
      <div
        className="w-screen h-screen text-[20px] overflow-auto relative bg-[#f1f1f1]"
        id="layout"
      >
        <div id="container" className="bg-cover m-auto">
          <SideMenu onClick={closeNav} />
          {children}
        </div>
      </div>
    </RecoilRoot>
  );
};

export default Layout;
