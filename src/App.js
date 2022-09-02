import React, {useEffect, useState} from 'react';
import './App.css';
const GIFS = [
  'https://media4.giphy.com/media/2bYewTk7K2No1NvcuK/giphy.gif?cid=ecf05e47sje4j096q58tm1p5ndyvwe6a59q5nl8t5qvm1ww3&rid=giphy.gif&ct=g',
  'https://media3.giphy.com/media/l41lJ8ywG1ncm9FXW/giphy.gif?cid=ecf05e476ototb5j61mf7x2n8lsyzjq6k35z3o0p5yte87y4&rid=giphy.gif&ct=g'
]
function App() {

  const [gifs, setGifs] = useState(GIFS)
  
  useEffect(function (){
    console.log('efecto ejecutado')
  })
  
  const DIFFERENT_GIFS = [
   'https://media1.giphy.com/media/xT0BKr4MvHdohFTe6s/giphy.gif?cid=ecf05e47pwmoopdta89p81cdqpgewyuoxi97y68mem9yrb5z&rid=giphy.gif&ct=g'

  ]

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif}/>)
        }
        <button onClick={() => setGifs(DIFFERENT_GIFS)}>Cambiar Gifs</button>
      </section>
    </div>
  );
}

export default App;
