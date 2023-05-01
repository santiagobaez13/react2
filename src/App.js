import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenido'} />
      <ItemCount>initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada  ', quantity)}</ItemCount>
    </div>
  );
}

export default App;
