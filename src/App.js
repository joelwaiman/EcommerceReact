import React, { StrictMode } from "react";
import ItemListContainer from "./Components/Containers/ItemListContainer/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/Containers/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Components/Containers/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header"
import { CustomProvider } from "./CustomContext";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <CustomProvider>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategory" element={<ItemListContainer />} />
            <Route path="/producto/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CustomProvider>
      </BrowserRouter>
    </StrictMode>

  )
}

export default App
