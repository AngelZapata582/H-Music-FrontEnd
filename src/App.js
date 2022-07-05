
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reproductor from './components/componentes/player/audio.js';
import FilterableProductTable from './components/componentes/admin/admin.js';
const music = [
  {nombre:"track1/mp3"},
  {nombre:"track2/opus"},
  {nombre:"track3/mp3"}
]

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

function App() {
  return (
    <div className="App">
      <Reproductor music={music}/>
      
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
