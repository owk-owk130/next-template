import { atom } from "recoil";

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
