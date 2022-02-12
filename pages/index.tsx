import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Sidebar } from '../components/sidebar/sidebar';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Spotify Clone</title>
        <meta
          name="description"
          content="A Spotify Clone built by Tyler Nevell"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Sidebar />
        {/* Center */}
      </main>

      <div>{/* Player  */}</div>
    </div>
  );
};

export default Home;
