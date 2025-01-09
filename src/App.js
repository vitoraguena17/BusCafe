import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./components/pages/index";
import ProductsPage from "./components/pages/products";
import ProductPage from "./components/pages/product";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
