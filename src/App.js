import "./App.css";

import { Route, Routes, Navigate } from "react-router-dom";

//Components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";

//Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./components/CartContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/*" element={<Navigate to="products" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
