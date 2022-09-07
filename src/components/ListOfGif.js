import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGif({ params }) {
  const {keyword}=params

  const [loading, setLoading] = useState(false)

  const [gifs, setGifs] = useState([]);

  useEffect(function () {
      setLoading(true)
      getGifs({ keyword })
        .then((gifs) => {
          setGifs(gifs)
          setLoading(false)
    })
  }, [keyword])

  if(loading)return <i>Cargando &#x2622;</i>
  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))}
    </div>
  );
}
