import React, { Dispatch, FC, SetStateAction } from "react";

// import kakao from "src/assets/icon/kakaotalk.svg";
import Image from "next/image";
import SnsList from "./Items/SnsList";
import MenuList from "./Items/MenuList";
import profile_img from "assets/image/Profile_img.png";
import CloseBlackIcon from "assets/icon/CloseBlackIcon";
import UserBlackIcon from "assets/icon/UserBlackIcon";
import MailBlackIcon from "assets/icon/MailBlackIcon";
import BoxBlackIcon from "assets/icon/BoxBlackIcon";
import TableBlackIcon from "assets/icon/TableBlackIcon";
import InstagramIcon from "assets/icon/InstagramIcon";
import GithubIcon from "assets/icon/GithubIcon";
import FacebookIcon from "assets/icon/FacebookIcon";

interface Props {
  onClick: () => void;
  isMenu: any;
}

const SideMenu: FC<Props> = ({ isMenu, onClick }) => {
  // const isSideMenu = useRecoilValue(isMenuState);

  const nullPage = () => {
    alert("페이지 공사중입니다");
  };
  return (
    <div
      className={`animate-sideMenu bg-white w-[300px] h-screen p-[16px] box-border leading-[36px] fixed z-[300] animate-[side-left_0.4s] transition-[0.5s] 
     ${isMenu ? "tablet:block" : "tablet:hidden"} ${
        isMenu ? "mobile:block" : "mobile:hidden"
      }`}
      // style={style}
    >
      <div
        className="w-[20px] h-[20px] absolute top-10 right-20 hidden tablet:block mobile:block"
        onClick={onClick}
      >
        <CloseBlackIcon />
      </div>
      <div className="w-[120px] h-[120px] mb-30 rounded-[4px]">
        <Image src={profile_img} alt="profile_img" width="100%" height="100%" />
      </div>
      <div className=" text-[20px] font-bold">PORTFOLIO</div>
      <div className=" text-[15px] text-[#757575] mb-[-10px]">
        Template by W3.CSS
      </div>
      <div className="menu_list">
        <ul className="p-0">
          <MenuList link="/" menu="PORTFOLIO">
            <BoxBlackIcon />
          </MenuList>
          <li onClick={nullPage} className="list-none cursor-pointer">
            <span className="ico ico w-[15px] h-[15px] leading-[15px] mr-[15px] inline-block align-middle">
              <UserBlackIcon />
            </span>
            <span className="inline-block text-[15px] align-middle">ABOUT</span>
          </li>
          <MenuList link="/study" menu="STUDY TABLE">
            <TableBlackIcon />
          </MenuList>
          <li onClick={nullPage} className="list-none cursor-pointer">
            <span className="ico ico w-[15px] h-[15px] leading-[15px] mr-[15px] inline-block align-middle">
              <MailBlackIcon />
            </span>
            <span className="inline-block text-[15px] align-middle">
              CONTACT
            </span>
          </li>
        </ul>
      </div>
      <div className="sns_list">
        <SnsList href="https://www.instagram.com/k.taegwan/">
          <InstagramIcon />
        </SnsList>
        <SnsList href="https://www.facebook.com/taegwan.kim.90">
          <FacebookIcon />
        </SnsList>
        {/* <SnsList href="https://www.facebook.com/taegwan.kim.90" img={kakao} alt="kakao" /> */}
        <SnsList href="https://github.com/Kim-TaeGwan">
          <GithubIcon />
        </SnsList>
      </div>
    </div>
  );
};

export default SideMenu;
