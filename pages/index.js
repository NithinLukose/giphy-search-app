import Head from "next/head";
import GIFContainer from "../common/components/molecule/Trending";

export default function Home({ trendingGIFs, trendingCats }) {
  return (
    <div className="container">
      <Head>
        <title>Giphy</title>
      </Head>
      <div className="header">
        <h1>Giphy</h1>
        <div>
          <input />
        </div>
      </div>
      <GIFContainer gifs={trendingGIFs.data} title="Trending" />
      <GIFContainer gifs={trendingCats.data} title="Cats" />
    </div>
  );
}

// export async function getStaticProps() {
//   let catGiphys = await fetch(
//     "https://api.giphy.com/v1/gifs/search?q=cats&api_key=qOs5aDoMpWCw3TETNjHr9eQlw8WZ0ssa&limit=6"
//   );
//   catGiphys = await catGiphys.json();
//   return { props: { catGiphys: catGiphys } };
// }

export async function getServerSideProps() {
  const trendingGIFs = await fetch(
    "https://api.giphy.com/v1/gifs/trending?api_key=qOs5aDoMpWCw3TETNjHr9eQlw8WZ0ssa&limit=6"
  ).then((response) => response.json());
  const trendingCats = await fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=qOs5aDoMpWCw3TETNjHr9eQlw8WZ0ssa&limit=6&q=cats"
  ).then((response) => response.json());
  return {
    props: {
      trendingGIFs,
      trendingCats,
    },
  };
}
