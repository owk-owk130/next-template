import DefaultLayout from "../layout/defaultLayout";
import Counter from "../components/Counter";
import { css } from "@emotion/react";
import { mq, BreakPoints } from "../styles/mediaQuery";

const Container = css`
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

const Main = css`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = css`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-left: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Logo = css`
  height: 1em;
`;

const Home = () => {
  return (
    <DefaultLayout>
      <div css={Container}>
        <main css={Main}>
          <Counter />
        </main>
        <footer css={Footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <img src="/vercel.svg" alt="Vercel Logo" css={Logo} />
          </a>
        </footer>
      </div>
    </DefaultLayout>
  );
};

export default Home;
