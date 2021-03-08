import Cookies from 'js-cookie';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';

export default function GetSingleProduct(props) {
  const watch = props.singleWatch;
  const [addWatchInCart, setAddWatchInCart] = useState(1);

  return (
    <Layout>
      <Head>
        <link rel="logo" href="/logo.svg" />
        <title>Single watch</title>
      </Head>
      <section>
        <h1>
          Name:
          {watch.productName}
        </h1>
        <div>About collection: {watch.aboutCollection}</div>
        <div> Description: {watch.description}</div>
        <div> Price: {watch.price} €</div>
      </section>

      <button
        onClick={() => {
          let cookieValueClientSide = Cookies.get('watchesCookie');
          if (cookieValueClientSide) {
            cookieValueClientSide = JSON.parse(cookieValueClientSide);
          }

          if (cookieValueClientSide && cookieValueClientSide.length > 0) {
            cookieValueClientSide.map((singleWatchInCart) => {
              if (watch.id === singleWatchInCart.id) {
                singleWatchInCart.quantity += addWatchInCart;
              }
              return singleWatchInCart;
            });

            if (
              cookieValueClientSide.find((element) => {
                return element.id === watch.id;
              }) === undefined
            ) {
              cookieValueClientSide.push({
                id: watch.id,
                quantity: addWatchInCart,
              });
            }
            Cookies.set('watchesCookie', cookieValueClientSide);
          } else {
            Cookies.set(
              'watchesCookie',
              JSON.stringify([{ id: watch.id, quantity: addWatchInCart }]),
            );
          }
        }}
      >
        Add to Cart{' '}
      </button>
      <p>Number cookies: {addWatchInCart}</p>
      <button
        onClick={() => {
          return addWatchInCart > 0
            ? setAddWatchInCart(addWatchInCart - 1)
            : '';
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          setAddWatchInCart(addWatchInCart + 1);
        }}
      >
        +
      </button>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getWatchesDataBaseId } = await import('../../util/database.js');
  const idUrl = context.query.id;
  const singleWatch = await getWatchesDataBaseId(idUrl);

  return {
    props: {
      singleWatch: singleWatch || null,
    },
  };
}
