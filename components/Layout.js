/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
<link
  href="https://fonts.googleapis.com/css?family=Chivo:300,700|Playfair+Display:700i"
  rel="stylesheet"
></link>;

const navBar = css`
  display: flex;

  top: 0;
  width: 100vw;
  background-color: #d7727c;
  padding-top: 50px;
  margin: 0 auto;
  margin-left: 0;
  z-index: 2;

  a {
    margin: auto;
    text-decoration: none;
    position: bottom;
    color: #252c58;
    font-family: 'Chivo', sans-serif;
    font-weight: 400;
  }
  div {
    font-family: 'Chivo', sans-serif;
    color: #252c58;
    font-size: xx-large;
    position: bottom;
    margin: auto;
  }
`;

export default function Layout(props) {
  return (
    <>
      <Head>
        <title> WatchYouGot</title>
        <link rel="logo" href="/logo.svg" />
      </Head>
      {props.children}
      <header>
        <nav css={navBar}>
          <Image src="/logoWatch.svg" width={80} height={80} alt="logo" />

          <Link href="./">
            <a>WatchYouGot</a>
          </Link>

          <Link href="/home">
            <a>Home</a>
          </Link>

          <Link href="/products">
            <a> Products </a>
          </Link>

          <Link href="/about">
            <a> About</a>
          </Link>

          <Link href="/shoppingCart">
            <a> Cart </a>
          </Link>
        </nav>
      </header>
    </>
  );
}
