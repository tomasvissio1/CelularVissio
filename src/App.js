import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemList from './components/itemList/ItemList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import  Movimiento  from './components/movimientoMouse/Movimiento';
import Cart from './components/cart/Cart';
import CartContextProvider, {CartContext} from './components/context/CartContext';
import React, { createContext } from 'react'

function App() {
  return (
    
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Movimiento/>
          <Routes>
            <Route path='/' element={
            <ItemList/>}/>
                
            <Route path='/:detalleId' element={
              <ItemDetailContainer/>
            }/>
            <Route path='/cart' element={
              <Cart/>
            }/>
          </Routes>
        </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
