import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

function GIFContainer({ gifs = [], title }) {
  return (
    <>
      <h2>{title}</h2>
      <div className={styles.container}>
        {gifs.length > 0 &&
          gifs.map((gif) => (
            <div key={gif.id} className={styles.gif_item}>
              <Image
                src={gif.images.original.url}
                alt={gif.title}
                layout="fill"
              />
              <Link
                href={{
                  pathname: `/search/${gif.title}`,
                  query: { gifId: gif.id },
                }}
              >
                <p>{gif.title}</p>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default GIFContainer;
