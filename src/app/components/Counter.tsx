import { useSample } from "~/atoms/sample";

const Counter = () => {
  const [sample, setSample] = useSample();
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
