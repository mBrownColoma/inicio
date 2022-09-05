import React, {useState} from 'react';
import './App.css';
import ListOfGif from './components/ListOfGif';
import { Link, Route } from "wouter";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/matrix'>Gif de Matrix</Link>
        <Link to='/gif/caballos'>Gif de Caballos</Link>
        <Link to='/gif/ricky and morty'>Gif de Riqki and Morty</Link>
        <Route 
          path='/gif/:keyword' component={ListOfGif}/>
        {/* <button onClick={()=> setKeyword('matrix 2')}>Cambio de keyword</button> */}
        {/* <ListOfGif keyword={keyword}/> */}
        {/* <button onClick={() => setGifs(DIFFERENT_GIFS)}>Cambiar Gifs</button> */}
      </section>
    </div>
  );
}