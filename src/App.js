
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reproductor from './components/componentes/player/audio.js';
import FilterTableMusic from './components/componentes/admin/admin.js';
import RouterPaths from './components/componentes/Router/Router';


function App() {
  return (
    <div className="App">
      {/*<Reproductor music={music}/>*/}
      <RouterPaths/>
    </div>
  );
}

export default App;
