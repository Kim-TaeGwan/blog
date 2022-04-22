import React, { FC } from "react";
// import { useRecoilValue } from "recoil";
// import { isOverlayState } from "@/recoil/selector";

interface Props {
  isOverlay?: boolean;
}
const Overlay: FC<Props> = ({ isOverlay }) => {
  // const isOverlay = useRecoilValue(isOverlayState);
  return (
    <div
      className={`w-full h-full absolute top-0 left-0 bg-black ${
        isOverlay ? "block" : "hidden"
      }`}
      style={{ opacity: "0.3", zIndex: "1" }}
    />
  );
};

export default Overlay;
