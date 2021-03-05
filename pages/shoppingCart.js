import nextCookies from 'next-cookies';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function ShoppingCart(props) {
  const cookieMonster = props.cookie.map((element) => {
    return element.id;
  });
  const idFromDataBase = props.singleWatch.map((watch) => {
    return watch.id;
  });

  // function cookieIdVsDataBaseId() { let cookieAndDataBase;
  //   if (cookieMonster === idFromDataBase) return watch.productName};

  // console.log(idFromDataBase);

  return (
    <>
      <Layout>
        <Head>
          <title>WatchYouGot</title>
          <link rel="logo" href="/logo.ai" />
        </Head>
      </Layout>
      <div>Shopping Cart</div>

      {/* {props.cookie.map((element) => {
        return (
          <>
            {' '}
            <p>{element.id} </p>
            <p>{element.quantity}</p>{' '}
          </>
        );
      })} */}

      <p>Your products are ready for checkout:</p>
    </>
  );
}

export async function getServerSideProps(context) {
  const cookie = nextCookies(context).watchesCookie;
  const { getWatchesDataBase } = await import('../util/database.js');

  const singleWatch = await getWatchesDataBase();

  const cookieMonster = cookie.map((element) => {
    return element.id;
  });

  console.log('monster cookie', cookieMonster);
  const idFromDataBase = singleWatch.map((watch) => {
    return watch.id;
  });
  console.log('id from database', idFromDataBase);

  //const productToBeOrder = ;

  //console.log ("selected products", productToBeOrder);

  // 1. loop over the cookie and get the id of the product inside of the cookie
  //2. get from singleWatch just the ID
  // add to objects that I have in 2 the quantity that i get from number 1
  // result: array with only the objects the watches I need, and this objects to have the quantity
  return {
    props: {
      cookie: cookie || null,
      singleWatch: singleWatch || null,
      // new props and the ones above i wont need them
    },
  };
}

// { watchesCookie: [ { id: 2, quantity: 3 }, { id: 4, quantity: 1 } ] }
