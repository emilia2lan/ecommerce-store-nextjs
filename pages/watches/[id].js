import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/layout';

export default function getSingleProduct(props) {
  const [watchNumber, setWatchNumber] = useState(1);
  const propsWatch = props.allWatches;
  if (propsWatch === null) {
    return (
      <Layout>
        <Head>
          <title> Ops, your watch was Not Found</title>
        </Head>
        <h1>Watch Not Found</h1>
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        <Head>
          <link rel="logo" href="/logo.svg" />
          <title>Single watch</title>
        </Head>

        <section>
          {props.allWatches.id}
          <h1>
            Name:
            {props.allWatches.productName}
          </h1>
          <div>About collection: {props.allWatches.aboutCollection}</div>
          <div> Description: {props.allWatches.description}</div>
          <div> Price: {props.allWatches.price}€</div>
        </section>

        <button
          onClick={() =>
            watchNumber > 0 ? setWatchNumber(watchNumber - 1) : ''
          }
        >
          -
        </button>
        {watchNumber}
        <button
          onClick={() => {
            setWatchNumber(watchNumber + 1);
          }}
        >
          +
        </button>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;
  const { getWatchesDataBaseId } = await import('../../util/database.js');
  const allWatches = await getWatchesDataBaseId(id);
  console.log('query', context.query.id);
  console.log('database', allWatches);
  return {
    props: { allWatches: allWatches || null }, // will be passed to the page component as props
  };
}
