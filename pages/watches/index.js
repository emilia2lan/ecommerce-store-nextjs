import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Home(props) {
  return (
    <Layout>
      <Head>
        <link rel="logo" href="/logo.svg" />
      </Head>
      <p>
        Let me guide you to your luxury watch so your friends can always ask
        <i>WatchYouGot</i>?
      </p>
      <div>
        {props.allWatches.map((singleWatch) => (
          <div key={singleWatch.id}>
            <h1>{singleWatch.productName}</h1>
            <p>{singleWatch.description}</p>

            <Link href={`/watches/${singleWatch.id}`}>
              {singleWatch.productName}
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { getWatchesDataBase } = await import('../../util/database.js');
  const allWatches = await getWatchesDataBase();

  return {
    props: { allWatches: allWatches },
  };
}
