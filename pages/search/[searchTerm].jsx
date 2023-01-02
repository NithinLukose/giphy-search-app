import Link from "next/link";
import styles from "./styles.module.css";
export default function SearchGIF({ gifTitle, searchedGif }) {
  console.log(searchedGif);
  return (
    <div>
      <Link href="/">Back to home</Link>
      <h1>{gifTitle}</h1>
      <div className={styles.gif_container}>
        <img
          src={searchedGif.images.original.url}
          alt={searchedGif.title}
          className={styles.img}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const gifTitle = context.query.searchTerm;
  const gifId = context.query.gifId;
  const searchedGif = await fetch(
    `https://api.giphy.com/v1/gifs/${gifId}?api_key=qOs5aDoMpWCw3TETNjHr9eQlw8WZ0ssa&limit=6`
  ).then((response) => response.json());
  return {
    props: {
      gifTitle,
      searchedGif: searchedGif?.data,
    },
  };
}
