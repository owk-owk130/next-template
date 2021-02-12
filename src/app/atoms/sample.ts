import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

type SampleState = {
  counter: number;
};

const initialState: SampleState = {
  counter: 0,
};

export const sampleState = atom({
  key: "counter",
  default: initialState,
});

/**
 * Sample用 useRecoilState のラッパーフック。
 */
export const useSample = () => useRecoilState(sampleState);

/**
 * Sample用 useRecoilValue のラッパーフック。
 */
export const useSampleValue = () => useRecoilValue(sampleState);

/**
 * Sample用 useSetRecoilState のラッパーフック。
 */
export const useSetSample = () => useSetRecoilState(sampleState);
