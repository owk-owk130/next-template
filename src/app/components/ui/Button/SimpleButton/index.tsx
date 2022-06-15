import { FC } from "react";

type Props = {
  onClick: () => void;
  text: string;
};

export const SimpleButton: FC<Props> = ({ onClick, text }) => {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
};
