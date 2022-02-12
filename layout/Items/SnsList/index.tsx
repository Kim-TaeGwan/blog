import React, { FC } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}
const SnsList: FC<Props> = ({ href, children }) => {
  return (
    <div className="w-[18px] h-[18px] mr-[10px] inline-block cursor-pointer last:mr-0">
      <a href={href} target="blank w-[18px] h-[18px] block">
        {children}
      </a>
    </div>
  );
};

export default SnsList;
