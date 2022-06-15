import { useCounter } from "~/hooks/useCounter";

const Counter = () => {
  const { count, UpdateCount } = useCounter();
  const handleCountButton = () => {
    UpdateCount();
  };
  return (
    <>
      <p>{count}</p>
      <button type="button" onClick={handleCountButton}>
        click
      </button>
    </>
  );
};

export default Counter;
