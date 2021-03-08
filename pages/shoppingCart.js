import nextCookies from 'next-cookies';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function ShoppingCart(props) {
  function finalPrice() {
    let totalPrice = 0;
    props.productFinalToBeOrdered.forEach((element) => {
      totalPrice = element.price * element.quantity;
    });
    return totalPrice;
  }
  return (
    <>
      <Layout>
        <Head>
          <title>WatchYouGot</title>
          <link rel="logo" href="/logo.ai" />
        </Head>
      </Layout>
      <div>Shopping Cart</div>
      <p>Your products are ready for checkout:</p>
      {props.productFinalToBeOrdered.map((element) => {
        return (
          <div key={element.id}>
            {' '}
            <p>Product: {element.productName} </p>
            <p>Price: {element.price} € </p>
            <p>Quantity: {element.quantity} </p>
          </div>
        );
      })}

      <p>
        {' '}
        <strong>Total: {finalPrice()} € </strong>{' '}
      </p>
    </>
  );
}

export async function getServerSideProps(context) {
  const { getWatchesDataBase } = await import('../util/database.js');
  const allWatches = await getWatchesDataBase();

  const cookie = nextCookies(context);

  const productFinalToBeOrdered = [];

  cookie.watchesCookie.forEach((watchToBeOrdered) => {
    const singleProduct = allWatches.find(
      (watch) => watch.id === watchToBeOrdered.id,
    );

    if (singleProduct !== undefined) {
      const productToBeOrdered = {
        watchesId: watchToBeOrdered.id,
        productName: singleProduct.productName,
        price: singleProduct.price,
        quantity: watchToBeOrdered.quantity,
      };
      if (watchToBeOrdered.quantity !== 0) {
        productFinalToBeOrdered.push(productToBeOrdered);
      }
    }
  });

  return {
    props: {
      productFinalToBeOrdered: productFinalToBeOrdered,
    },
  };
}
