import React, {useEffect, useState} from 'react';
import './App.css';
import ListOfGif from './components/ListOfGif';
import getGifs from './services/getGifs';



function App() {

  const [gifs, setGifs] = useState([])
  
  useEffect(function (){
    console.log('actualizando gifs')
    // setGifs(DIFFERENT_GIFS)
    getGifs({keyword:'Chile'}).then(gifs=>setGifs(gifs))
  }, [])
  

  return (
    <div className="App">
      <section className="App-content">
        <ListOfGif gifs={gifs}/>
        {/* <button onClick={() => setGifs(DIFFERENT_GIFS)}>Cambiar Gifs</button> */}
      </section>
    </div>
  );
}

export default App;
