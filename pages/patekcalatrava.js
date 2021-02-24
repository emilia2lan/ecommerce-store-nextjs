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
          <h2>Patek Philippe Calatrava Tiffany &#38; Co 34.6 mm</h2>
          <Image src="/patek1.jpg" width={215} height={390} alt="patek watch" />
          <h3>About collection</h3>
          <p>
            Antoine Nobert de Patek knew the importance of relationships and
            building international clientele and retailer partnerships. In 1851
            he partnered with the fine jeweller "Tiffany &#38; Co" New York
            (USA). One of the brands oldest partnership's that is still
            maintained till this day. This partnership is still shown with the
            brand having their motif on the dial. One of the only retailers in
            the world to be allowed to do so on regular production models. There
            fore making each piece rare and unique. This particular model is the
            Ladies officers case Calatrava ref 7200R-001 model. Made in an all
            18t rose gold officers style case, held on a genuine alligator strap
            with matching rose gold pin buckle. Fitted with a manufacture
            calibre 240 automatic self-winding movement. Cream dial with applied
            gold Arabic numerals and Tiffany &#38; Co transferred motif.
            Finished with a sapphire crystal glass and case back.{' '}
          </p>
          <p>Price: 26.520,00 euro</p>
          <button> Buy</button>
        </section>
      </div>
    </>
  );
}
