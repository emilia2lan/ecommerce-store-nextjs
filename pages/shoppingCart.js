import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>WatchYouGot</title>
          <link rel="logo" href="/logo.ai" />
        </Head>
      </Layout>
      <div>Shopping Cart</div>
    </>
  );
}
