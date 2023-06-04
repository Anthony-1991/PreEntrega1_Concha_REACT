import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="grid grid-cols-4 gap-4">
        <ItemListContainer greeting="Goku Super Sayayin" />
        <ItemListContainer greeting="Goku Furioso" />
        <ItemListContainer greeting="Goku Cambio de Fase" />
        <ItemListContainer greeting="Goku Fase 1" />
        <ItemListContainer greeting="Goku en Namek" />
        <ItemListContainer greeting="Goku rubio" />
        <ItemListContainer greeting="Goku poderoso" />
        <ItemListContainer greeting="Goku fuerte" />
        
      </div>
    </div>
  );
}

export default App;
