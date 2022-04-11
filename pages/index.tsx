import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home - jonasclaes.be</title>
      </Head>

      <main className="min-h-screen h-full flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left pt-16 pb-8">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold">
            Hello!<br />I'm Jonas Claes.
          </h1>
          <p className='text-md md:text-3xl'>Software &amp; hardware engineer.</p>
        </div>
        <div>
          <Image
            src={"/images/selfie.jpeg"}
            height={360}
            width={360}
            alt="Profile picture of Jonas"
            className='rounded-full'
          />
        </div>
      </main>
    </Layout>
  )
}

export default Home
