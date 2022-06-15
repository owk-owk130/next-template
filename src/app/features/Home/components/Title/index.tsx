import { css } from "@emotion/react";

type Props = {
  text: string;
};

export const Title: React.FC<Props> = ({ text }) => {
  return <h1 css={TitleStyle}>{text}</h1>;
};

const TitleStyle = css`
  font-size: 32px;
  font-weight: bold;
`;
