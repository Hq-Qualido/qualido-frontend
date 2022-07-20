import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductId from "./components/products/ProductId";
import Error from "./components/error/Error";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/products" >
              <Route index element={<Products /> } />
              <Route path=":productId" element={<ProductId /> } />
              <Route path="*" element={<Products />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
