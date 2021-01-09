import { sampleState } from "../atoms/sample";
import { useRecoilState } from "recoil";

const Counter = () => {
    const [sample, setSample] = useRecoilState(sampleState);
    const handleCountButton = () => {
        setSample({ counter: sample.counter + 1 });
    };
    return (
        <>
            <p>{sample.counter}</p>
            <button type="button" onClick={handleCountButton}>
                click
            </button>
        </>
    );
};

export default Counter;
