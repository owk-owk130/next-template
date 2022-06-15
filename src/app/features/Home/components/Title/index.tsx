type Props = {
  text: string;
};

export const Title: React.FC<Props> = ({ text }) => {
  return <h1>{text}</h1>;
};
