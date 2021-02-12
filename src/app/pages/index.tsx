import DefaultLayout from "../layout/defaultLayout";
import Counter from "../components/Counter";
import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .footer {
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
  }
  .logo {
    height: 1em;
  }
`;

const Home = () => {
  return (
    <DefaultLayout>
      <Wrapper>
        <div className="container">
          <main className="main">
            <Counter />
          </main>

          <footer className="footer">
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
            </a>
          </footer>
        </div>
      </Wrapper>
    </DefaultLayout>
  );
};

export default Home;
