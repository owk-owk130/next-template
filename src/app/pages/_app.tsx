import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Global
        styles={css`
          ${emotionReset}
          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
      <Component {...pageProps} />;
    </RecoilRoot>
  );
};

export default App;
