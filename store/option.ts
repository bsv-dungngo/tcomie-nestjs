import { OptionsType } from "@/types";
import { t } from "@/utils";
import { atom } from "recoil";

export const baseOptionsState = atom<OptionsType[]>({
  key: "baseOptionsState",
  default: [],
});
