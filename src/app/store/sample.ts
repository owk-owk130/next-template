import {
  atom,
  useRecoilCallback,
  useRecoilValue,
  useResetRecoilState,
} from "recoil";

type SampleState = {
  count: number;
};

const initialState: SampleState = {
  count: 0,
};

export const sampleStateAtom = atom<SampleState>({
  key: "counter",
  default: initialState,
});

const useSet = () =>
  useRecoilCallback(({ set }) => (count: number) => {
    set(sampleStateAtom, { count: count });
  });

const useReset = () => useResetRecoilState(sampleStateAtom);

const useValue = () => useRecoilValue(sampleStateAtom);

export const counterActions = {
  useSet,
  useReset,
};

export const counterGetters = {
  useValue,
};
