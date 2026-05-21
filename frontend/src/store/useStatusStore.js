import { create } from "zustand";

export const useStatusStore = create((set) => ({
  status: [
    { name: "AI 엔진", state: "normal" },
    { name: "데이터 흐름", state: "normal" },
  ],
  setStatus: (i, stateVal) =>
    set((s) => {
      const n = [...s.status];
      n[i].state = stateVal;
      return { status: n };
    }),
  setAll: (stateVal) =>
    set((s) => ({
      status: s.status.map((v) => ({ ...v, state: stateVal })),
    })),
}));
