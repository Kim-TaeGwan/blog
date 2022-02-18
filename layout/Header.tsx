import React, { FC } from "react";
import Image from "next/image";

import profile_img from "assets/image/Profile_img.png";
import GemBlackIcon from "assets/icon/GemBlackIcon";

interface Props {
  onClick: () => void;
}

const Header: FC<Props> = ({ onClick }) => {
  return (
    <div className="mt-[10px] py-0 px-[16px]">
      <div className="relative h-[65px] hidden tablet:block mobile:block">
        <div className="text-[30px] absolute top-0 left-0 " onClick={onClick}>
          &#9776;
        </div>
        <div className="w-[65px] h-[65px] absolute top-0 right-0 rounded-[50%] ">
          <Image src={profile_img} alt="menu_m" width="100%" height="100%" />
        </div>
      </div>
      <div className="text-[36px] font-bold mt-[10px] mb-[40px] ">
        My Portfolio
      </div>
      <div className="header_nav pb-[15px] border-b-6 border-solid border-[#999]">
        <div className="header_nav_title inline-block align-middle text-[15px] mr-[5px] border-0">
          Filter :
        </div>
        <button className="filter_btn insert inline-block align-middle text-[15px] mr-[5px] border-0 py-[8px] px-[15px] bg-white hover:bg-[#999] hover:cursor-pointer">
          ALL
        </button>
        <button className="inline-block align-middle text-[15px] mr-0 border-0 py-[8px] px-[15px] bg-white hover:bg-[#999] hover:cursor-pointer">
          <span className="filter_ico w-[15px] h-[15px] mr-[15px] inline-block align-middle">
            <GemBlackIcon />
          </span>
          <span className="d_inline_block">Dev</span>
        </button>
      </div>
      <div />
    </div>
  );
};

export default Header;
