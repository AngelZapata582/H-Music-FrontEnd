
import './App.css';
import Reproductor from './components/componentes/player/audio.js';
const music = [
  {nombre:"track1/mp3"},
  {nombre:"track2/opus"},
  {nombre:"track3/mp3"}
]
function App() {
  return (
    <div className="App">
      <Reproductor music={music}/>
    </div>
  );
}

export default App;
