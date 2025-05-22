import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import {
  TECHNIQUES,
  Technique,
} from "/Users/alexandrepimentel/code/projects/myo/constants/Techniques";
import { randomInt } from "/Users/alexandrepimentel/code/projects/myo/utils/rng";

interface State {
  current: Technique;
  history: Technique[];
  roll: () => void;
}

export const useTechniqueStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        current: TECHNIQUES[0],
        history: [],
        roll: () =>
          set((s) => {
            const next = TECHNIQUES[randomInt(TECHNIQUES.length)];
            return { current: next, history: [next, ...s.history] };
          }),
      }),
      { name: "myo-storage" } // MMKV key
    )
  )
);
