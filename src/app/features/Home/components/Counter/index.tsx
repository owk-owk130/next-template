import { useCounter } from "~/features/Home/hooks/useCounter";
import { FC } from "react";
import { SimpleButton } from "~/components/ui/Button/SimpleButton";
import { css } from "@emotion/react";

export const Counter: FC = () => {
  const { value, UpdateCount } = useCounter();
  const handleCountButton = () => {
    UpdateCount();
  };
  return (
    <div css={ContainerStyle}>
      <p css={CountStyle}>{value.count}</p>
      <SimpleButton text={"click"} onClick={handleCountButton} />
    </div>
  );
};

const ContainerStyle = css`
  text-align: center;
`;

const CountStyle = css`
  margin-bottom: 10px;
`;
