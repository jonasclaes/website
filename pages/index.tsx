import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home - jonasclaes.be</title>
      </Head>

      <main className="flex h-full min-h-screen flex-col items-center justify-center gap-12 pt-16 pb-8 text-center md:flex-row md:text-left">
        <div>
          <h1 className="text-3xl font-bold md:text-6xl">
            Hello!
            <br />
            I&apos;m Jonas Claes.
          </h1>
          <p className="text-md md:text-3xl">
            Software &amp; hardware engineer.
          </p>
        </div>
        <div>
          <Image
            src={"/images/selfie.jpeg"}
            height={360}
            width={360}
            alt="Profile picture of Jonas"
            className="rounded-full"
          />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
