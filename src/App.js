import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import IntemListContainer from './components/containerComponents/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Promises from './components/promises/Promises';
import ItemList from './components/itemList/ItemList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Item from './components/itemList/Item';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import  Movimiento  from './components/movimientoMouse/Movimiento';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Movimiento/>
        <Routes>
          <Route path='/' element={
           <ItemList/>}/>
              
          <Route path='/:detalleId' element={
            <ItemDetailContainer/>
          }/>


          {/* <Route path='/carrito' element={
            <ItemCount/>
          }/> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
