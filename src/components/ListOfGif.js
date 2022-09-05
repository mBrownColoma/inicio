import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGif({ params }) {
  const {keyword}=params
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      console.log("actualizando gifs");
      // setGifs(DIFFERENT_GIFS)
      getGifs({ keyword }).then((gifs) => setGifs(gifs));
    },
    [keyword]
  );
  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))}
    </div>
  );
}
