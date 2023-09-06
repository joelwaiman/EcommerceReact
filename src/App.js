import React, { StrictMode } from "react";

import ItemListContainer from "./Components/Containers/ItemListContainer/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/Containers/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Components/Containers/Cart/Cart";
import Header from "./Components/Header/Header"
import Formulario from "./Components/Containers/Formulario/formulario"
import Congrats from "./Components/Containers/CongratsPage/Congrats";

import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Formulario" element={<Formulario />} />
            <Route path="/Congrats" element={<Congrats />} />
          </Routes>
        </CustomProvider>
      </BrowserRouter>
    </StrictMode>

  )
}

export default App
