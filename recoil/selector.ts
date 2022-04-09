import { menuState, overlayState } from "@/recoil/atom";
import { selector } from "recoil";

export const isMenuState = selector({
  key: "isMenuState",
  get: ({ get }) => {
    const menu = get(menuState);
    return menu;
  },
});

export const isOverlayState = selector({
  key: "isOverlayState",
  get: ({ get }) => {
    const overlay = get(overlayState);
    return overlay;
  },
});
