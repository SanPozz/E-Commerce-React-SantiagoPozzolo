import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path={"/"} element={<ItemListContainer/>} />
            <Route path={"/category/:id"} element={<ItemListContainer/>} />
            <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
            <Route path={"/cart"} element={<CartWidget/>} />
            <Route path={"/*"} element={<Error/>} />

          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
