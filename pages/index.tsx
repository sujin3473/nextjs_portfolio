import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Sienna's Portfolio</title>
        <meta name="description" content="Next.js로 구현한 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">Home</h1>
    </Layout>
  );
};

export default Home;
