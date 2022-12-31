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
              <img
                src={gif.images.original.url}
                alt={gif.title}
                className={styles.img}
              />
              <p>{gif.title}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default GIFContainer;
