import "../styles/globals.scss";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <RecoilRoot>
            <Component {...pageProps} />;
        </RecoilRoot>
    );
};

export default App;
