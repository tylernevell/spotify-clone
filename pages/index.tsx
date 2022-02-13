import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import { CenterConsole } from '../components/center-console/center-console';
import { Player } from '../components/player/player';
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

      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};

export default Home;
