<<<<<<< HEAD
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Tienda De Ropa En Descuento" />
      
    </div>
=======
import Home from "./componets/Home/Home";
import CartContent from "./componets/CartContent/CartContent";
import DataProvider from "./componets/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartContent />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
>>>>>>> 8c61840 (segundo commit)
  );
}

export default App;
