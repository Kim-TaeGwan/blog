import React, { FC } from "react";
import Link from "next/link";

interface Props {
  link: string;
  menu: string;
  children: React.ReactNode;
}
const MenuList: FC<Props> = ({ link, menu, children }) => {
  return (
    <>
      <li className="list-none cursor-pointer">
        <Link href={link} passHref>
          <a className="no-underline text-black">
            <span className="ico w-[15px] h-[15px] leading-[15px] mr-[15px] inline-block align-middle">
              {children}
            </span>
            <span className="inline-block text-[15px] align-middle">
              {menu}
            </span>
          </a>
        </Link>
      </li>
    </>
  );
};

export default MenuList;
