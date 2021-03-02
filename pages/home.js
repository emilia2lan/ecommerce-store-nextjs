import Head from 'next/head';
import ReactPlayer from 'react-player';
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
        <ReactPlayer
          playing
          loop
          url="/pocketWatch.mp4"
          width="100vw"
          height="100hw"
        />

        <div>Home page- not home, need to change name</div>
      </section>
    </>
  );
}
