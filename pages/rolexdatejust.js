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
        <div>
          <h1>Available products</h1>
          <section>
            <h2>Rolex Lady-Datejust 26 mm</h2>
            <Image
              src="/rolexDateJust.jpg"
              width={210}
              height={370}
              alt="rolex watch"
            />
            <h3>About collection</h3>
            <p>
              This beautiful elegant lady's 26 mm Rolex date just watch would
              look great on any wrist with fluted bezel, oyster bracelet and
              roman numeral silver color dial. Date at 3 o'clock stainless
              steel. Watch comes with box and is ready for your wrist. The light
              reflections on the case sides and lugs highlight the elegant
              profile of the Oyster case, which is fitted with a Fluted bezel.
              Rolex's classic feminine watch, the Lady-Datejust is in the
              lineage of the Datejust, the emblematic model that has been a
              byword for style and accurate timekeeping.{' '}
            </p>
            <p>Price: 4.500,00 euro</p>
            <button> Buy</button>
          </section>
        </div>
      </div>
    </>
  );
}
