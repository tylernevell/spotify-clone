import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { CenterConsole } from '../components/center-console/center-console';
import { Sidebar } from '../components/sidebar/sidebar';

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify Clone</title>
        <meta
          name="description"
          content="A Spotify Clone built by Tyler Nevell"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="flex">
        <Sidebar />
        <CenterConsole />
      </main>

      <div>{/* Player  */}</div>
    </div>
  );
};

export default Home;
