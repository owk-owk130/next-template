import { useCounter } from "~/features/Home/hooks/useCounter";
import { FC } from "react";
import { SimpleButton } from "~/components/ui/Button/SimpleButton";

export const Counter: FC = () => {
  const { value, UpdateCount } = useCounter();
  const handleCountButton = () => {
    UpdateCount();
  };
  return (
    <>
      <p>{value.count}</p>
      <SimpleButton text={"click"} onClick={handleCountButton} />
    </>
  );
};
