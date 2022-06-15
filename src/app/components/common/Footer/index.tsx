import { css } from "@emotion/react";

export const Footer = () => {
  return (
    <footer css={FooterStyle}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/vercel.svg" alt="Vercel Logo" css={LogoStyle} />
      </a>
    </footer>
  );
};

const FooterStyle = css`
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

const LogoStyle = css`
  height: 1em;
`;
