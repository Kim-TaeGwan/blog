import React, { FC } from "react";

interface Props {
  isOverlay?: boolean;
}
const Overlay: FC<Props> = ({ isOverlay }) => {
  return (
    <div
      className={`w-full h-full absolute top-0 left-0 bg-black opacity-30 ${
        isOverlay ? "block" : "hidden"
      }`}
    />
  );
};

export default Overlay;
