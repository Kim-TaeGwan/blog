import React, { FC } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}
const SnsList: FC<Props> = ({ href, children }) => {
  return (
    <div>
      <a href={href} target="blank">
        {children}
      </a>
    </div>
  );
};

export default SnsList;
