import { useCounter } from "~/hooks/useCounter";

const Counter = () => {
  const { value, UpdateCount } = useCounter();
  const handleCountButton = () => {
    UpdateCount();
  };
  return (
    <>
      <p>{value.count}</p>
      <button type="button" onClick={handleCountButton}>
        click
      </button>
    </>
  );
};

export default Counter;
