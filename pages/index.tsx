import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sienna's Portfolio</title>
        <meta name="description" content="Next.js로 구현한 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
        <h5>main</h5>
      </Head>
    </div>
  );
};

export default Home;
