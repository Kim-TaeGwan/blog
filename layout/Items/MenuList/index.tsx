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
      <li>
        <Link href={link} passHref>
          <a>
            <span className="ico">{children}</span>
            <span> {menu} </span>
          </a>
        </Link>
      </li>
    </>
  );
};

export default MenuList;
