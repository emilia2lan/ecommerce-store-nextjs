import Cookies from 'js-cookie';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/layout';

export default function getSingleProduct(props) {
  const [watch, setWatch] = useState(props.singleWatch);
  const [addWatchInCart, setAddWatchInCart] = useState(1);

  // useEffect(() => {
  //   if (!Cookies.get('watches')) {
  //     Cookies.set('watches', JSON.stringify([]));
  //   }
  // }, []);
  //  Todo : be able to add a product to cookie : product object with one id, and 1 quantity, curly brackets {id:id, quantity:quantity1};
  // 2. when I click add to cart cookie should change from [] to [{id:1, quantity:2} {id:3, quantity:5}]
  // 3. click again add to cart it should change the quantity of the {} inside of the array from 1 to 2, all comes from ONE function.
  //4. if you change the page 1 or 2, should instead of changing the whole object, should add a new object next to the object already existing (comes from the SAME function).

  // 5.
  return (
    <>
      <Layout>
        <Head>
          <link rel="logo" href="/logo.svg" />
          <title>Single watch</title>
        </Head>

        <section>
          {watch.id}
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
            let cookieValueClientSide = Cookies.get('watches');
            if (cookieValueClientSide) {
              cookieValueClientSide = JSON.parse(cookieValueClientSide);
            }
            if (cookieValueClientSide && cookieValueClientSide.length > 0) {
              cookieValueClientSide.map((singleWatchInCart) => {
                if (watch.id === singleWatchInCart.id) {
                  singleWatchInCart.quantity += addWatchInCart;
                  return singleWatchInCart;
                }
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
              Cookies.set('watches', cookieValueClientSide);
            } else {
              Cookies.set(
                'watches',
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
            setAddWatchInCart(addWatchInCart - 1);
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
    </>
  );
}

export async function getServerSideProps(context) {
  const { getWatchesDataBaseId } = await import('../../util/database.js');
  console.log('ctx', context.query.id);
  const id = context.query.id;

  const singleWatch = await getWatchesDataBaseId(id);
  console.log('singleWatch', singleWatch);
  // 1. Read the cookie the first time

  // const cookiesNumClientSite = context.req.cookies.watches;

  // const visitsCookieValue = cookiesNumClientSite
  //   ? JSON.parse(cookiesNumClientSite)
  //   : [];

  // const singleWatchFromTable = visitsCookieValue.find(
  //   (watch) => watch.id === id,
  // );
  return {
    props: {
      // singleWatchFromTable is the id from watches Table in the Database
      singleWatch: singleWatch || null,
    }, // will be passed to the page component as props
  };
}
