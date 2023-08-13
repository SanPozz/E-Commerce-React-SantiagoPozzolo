import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartContainer from './components/CartContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';
import Error from './components/Error';

import CartContext from './components/Context/cartContext';

function App() {
  return (
    <div className="App">
      <CartContext>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path={"/"} element={<ItemListContainer/>} />
              <Route path={"/category/:idCategory"} element={<ItemListContainer/>} />
              <Route path={"/item/:idItem"} element={<ItemDetailContainer/>} />
              <Route path={"/cart"} element={<CartContainer/>} />
              <Route path={"/checkout"} element={<Checkout/>} />
              <Route path={"/*"} element={<Error/>} />
            </Routes>
          </BrowserRouter>
      </CartContext>
    </div>
  );
}

export default App;
