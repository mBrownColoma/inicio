import React, {useState} from 'react';
import './App.css';
import ListOfGif from './components/ListOfGif';
import { Link, Route, useLocation} from "wouter";

export default function App() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
    const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
  }
  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <div className="App">
      <section className="App-content">
        <h1><Link className="App-ini" to='/'>App Inicio</Link></h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type='text' value={keyword}/>
          <br/>
          <input type="submit" value="Buscar"/>
        </form>
        <br/>
        <Link to='/search/matrix'>Gif de Matrix</Link>
        <Link to='/search/caballos'>Gif de Caballos</Link>
        <Link to='/search/ricky and morty'>Gif de Ricky and Morty</Link>
        <br/>
        <Route path='/search/:keyword' component={ListOfGif}/>
      </section>
    </div>
  );
}