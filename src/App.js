import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import IntemListContainer from './components/containerComponents/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Promises from './components/promises/Promises';
import ItemList from './components/itemList/ItemList';
import Item from './components/itemList/Item';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App" /* onClick={()=>console.log('soy evento')} */>
      <NavBar />
      {/* <IntemListContainer saludo='hola mundo'/> */}
      <ItemCount/>
      {/* <Promises/> */}
      <ItemList/>
      <ItemDetailContainer/>
      {/* <Item/> */}
      
      
     {/*  <header className="App-header" style={{'backgroundColor':"white"}}>
          
        
        <img src={logo} className="App-logo" alt="logo"  />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
