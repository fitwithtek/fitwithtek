import Head from 'next/head'
import Image from 'next/image'
import { Header, Hero } from '../components'

const styles = {};

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

      <main className="h-full">
        <Header />
        <Hero />
      </main>
    </div>
  )
}
