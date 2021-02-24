import Head from 'next/head';
import Layout from '../components/Layout';


export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <link rel="logo" href="/logo.svg" />
        </Head>
      </Layout>
      <section>

        <div>Home page- not home, need to change name</div>
      </section>
    </>
  );
}
