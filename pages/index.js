/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import { Header, Hero } from '../components';

export default function Home() {
  return (
  // <div className="text-pink-500 text-3xl">
  //   Welcome to FITWITHTEK
  // </div>

    <div className="flex flex-col h-screen w-screen">
      <Head>
        <title>FITWITHTEK</title>
        <meta name="description" content="FITWITHTEK" />
        {/* <link rel="icon" href="/favicon.ico" /> // TODO: Update favicon */}
      </Head>

      <main className="h-full bg-[#0b1518]">
        <Header />
        <Hero />
      </main>
    </div>
  );
}
