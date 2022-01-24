import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components'

const styles = {};

export default function Home() {
  return (
    // <div className="text-pink-500 text-3xl">
    //   Welcome to FITWITHTEK
    // </div>

    <div className={styles.container}>
      <Head>
        <title>FITWITHTEK</title>
        <meta name="description" content="FITWITHTEK" />
        {/* <link rel="icon" href="/favicon.ico" /> // TODO: Update favicon */}
      </Head>

      <main>
        <h1>
          Welcome to <a href="/">FITWITHTEK</a>
        </h1>

        <Header />
      </main>
    </div>
  )
}
