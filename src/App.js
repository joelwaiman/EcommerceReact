import React from "react";
import Header from "./Components/Header/Header";
import ItemListContainer from "./Components/Containers/ItemListContainer/ItemListContainer/ItemListContainer";
import { Cart } from "./Components/Containers/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path= "/" element={<ItemListContainer />}/>
          <Route path= "/cart" element={<Cart />}/>
        </Routes>
        
      </BrowserRouter>

    </>
  )
}

export default App
