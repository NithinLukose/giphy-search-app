import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home(initialProps) {
  useEffect(() => console.log(initialProps));
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Giphy search app</h1>
      </main>
    </>
  );
}

export async function getStaticProps() {
  let catGiphs = await fetch(
    "https://api.giphy.com/v1/gifs/search?q=cats&api_key=qOs5aDoMpWCw3TETNjHr9eQlw8WZ0ssa&limit=10"
  ).then((response) => response.json());
  return {
    props: { catGiphs },
  };
}
