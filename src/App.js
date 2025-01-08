import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./components/pages/index";
import ProductsPage from "./components/pages/products";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
