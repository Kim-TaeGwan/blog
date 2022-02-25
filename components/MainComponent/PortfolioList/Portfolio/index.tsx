import React, { FC } from "react";
import Image from "next/image";

interface Props {
  title: string;
  comment: string;
  img_url: string;
}
const Portfolio: FC<Props> = ({ title, comment, img_url }) => {
  return (
    <div className=" w-[33.3%] py-0 px-[8px] mb-[15px] inline-block align-top box-border text-[15px] mobile:w-full mobile:block mobile:mb-[15px]">
      <div className=" border-b border-solid border-[#888]">
        <Image
          src={img_url}
          alt="portfolio_img"
          width={316}
          height={163}
          className="align-middle hover:opacity-60 mobile:h-[230px]"
          objectFit="cover"
          layout="responsive"
          priority
        />
      </div>
      <div className="h-[140px] bg-white p-[15px] box-border">
        <p className="m-0">
          <b>{title}</b>
        </p>
        <p className="m-0 mt-[15px] leading-normal">{comment}</p>
      </div>
    </div>
  );
};

export default Portfolio;
