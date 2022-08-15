
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reproductor from './components/componentes/player/audio.js';
import FilterTableMusic from './components/componentes/admin/admin.js';
import Playlist from './components/componentes/player/Playlist/Playlist';
import HomeLogin from './components/componentes/player/HomeLogin/Homelogin';

const music = [
  {nombre:"track1/mp3"},
  {nombre:"track2/opus"},
  {nombre:"track3/mp3"}
]


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Playlist/>
=======
      <Reproductor music={music}/>
      <RouterPaths/>
>>>>>>> 1e68e70741d12a8dcf3cb68de756be449a849b1b
    </div>
  );
}

export default App;
