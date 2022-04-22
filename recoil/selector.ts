import { menuState, overlayState } from "@/recoil/atom";
import { selector } from "recoil";

export const isMenuState = selector({
  key: "isMenuState",
  get: ({ get }) => {
    return get(menuState);
  },
});

export const isOverlayState = selector({
  key: "isOverlayState",
  get: ({ get }) => {
    return get(overlayState);
  },
});
