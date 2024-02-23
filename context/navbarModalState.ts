import { atom } from "recoil";

export interface navbarModalState {
  open: boolean;
}

const defaultModalState: navbarModalState = {
  open: false,
};

export const navbarModalState = atom<navbarModalState>({
  key: "navbarModalState",
  default: defaultModalState,
});
