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
          <h2>Cartier Ballon Bleu 37mm </h2>
          <Image
            src="/cartier.jpg"
            width={390}
            height={390}
            alt="tudor watch"
          />
          <h3>About the collection </h3>
          <p>
            Airy like a balloon, blue like the cabochon it encloses - the Ballon
            Bleu de Cartier elegantly adorns women's and men's wrists. The Roman
            numerals are distracted from their course under the influence of a
            deep blue winding crown. A case with outwardly curved lines,
            engine-turned dial, sword-shaped hands, bracelets with polished or
            satin-finished links ... the Ballon Bleu de Cartier follows its path
            through the Cartier watch universe.
          </p>
          <p>Price: 7.250,00 euro</p>
          <button>Buy</button>
        </section>
      </div>
    </>
  );
}
