import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/home/HomePage";
import CartPage from "../src/pages/cart/CartPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
