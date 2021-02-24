/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

const productPage = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row: auto;
  grid-gap: 1rem;
  margin: 25px;

  h1,
  h2,
  h3 {
    color: #252c58;
  }
  p {
    color: #252c58;
  }
  button {
    color: #bda06a;
    background: #252c58;

    cursor: pointer;
    width: 80px;
    height: 35px;
    font-size: 25px;
    text-align: center;
  }
  button:hover {
    color: #bda06a;
    background: #252c58;
    box-shadow: 2px 2px 2px 0px #d7727c;
    cursor: pointer;
  }
`;

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>WatchYouGot</title>
          <link rel="logo" href="/logo.ai" />
        </Head>
      </Layout>

      <div css={productPage}>
        <section>
          <h2>Tudor Style Swiss Stainless Steel 34 mm</h2>
          <Image src="/tudor.jpg" width={390} height={390} alt="tudor watch" />
          <h3>About collection</h3>
          <p>
            If you think of golden times, you have good memories. TUDOR
            dedicates itself to retro design, which has proven its worth since
            the beginning of watch history. TUDOR inspires with sporty designs
            as well as with sophisticated vintage creations. Here the highest
            technical performance meets stylish elegance.
          </p>

          <p>Price: 1.999,00 euro</p>
          <button> Buy</button>
        </section>
      </div>
    </>
  );
}
