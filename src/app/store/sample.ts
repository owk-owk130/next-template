import { atom, useAtomValue } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { useCallback } from "react";

const sampleAtom = atom<number>(0);
const useValue = () => useAtomValue(sampleAtom);

const useSet = () =>
  useAtomCallback(
    useCallback((_get, set, count: number) => {
      set(sampleAtom, count);
    }, [])
  );

export const counterGetters = { useValue };
export const counterActions = { useSet };
