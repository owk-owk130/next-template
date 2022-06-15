import { Title } from "~/features/Home/components/Title";
import { Footer } from "~/components/common/Footer";
import { css } from "@emotion/react";
import { BreakPoints, mq } from "~/styles/mediaQuery";
import { Counter } from "~/features/Home/components/Counter";

export const HomePage = () => {
  return (
    <>
      <div css={ContainerStyle}>
        <main css={MainStyle}>
          <Title text={"Hello World"} />
          <Counter />
          <Footer />
        </main>
      </div>
    </>
  );
};

const ContainerStyle = css`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mq(BreakPoints.s)} {
    background-color: antiquewhite;
  }
`;

const MainStyle = css`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
