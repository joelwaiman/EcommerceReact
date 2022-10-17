import React from "react";
import ItemListContainer  from "./Components/Containers/ItemListContainer/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/Containers/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Components/Containers/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path= "/" element={<ItemListContainer />}/>
          <Route path= "/categoria/:idCategory" element={<ItemListContainer/>}/>
          <Route path="/producto/:idProducts" element={<ItemDetailContainer />}/>
          <Route path= "/cart" element={<Cart />}/>
        </Routes>
        
      </BrowserRouter>

    </>
  )
}

export default App
