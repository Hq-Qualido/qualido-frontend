import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProductId from "./components/products/ProductId";
import Error from "./components/error/Error";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Cart from "./components/cart/Cart";
import { CartProvider } from "react-use-cart";
import Dashboard from "./components/dashboard/Dashboard";
import Wishlist from "./components/dashboard/Wishlist";
import Orders from "./components/dashboard/Orders";

function App() {
  const name = localStorage.getItem('Name');
  return (
    <>
    <CartProvider >

      <Router>
        <Navbar name={name}/>
        <Routes>
        <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/dashboard" element={name ? <Dashboard /> : <Navigate to="/login" replace={true} /> } />
          <Route path="/dashboard/wishlist" element={name ? <Wishlist /> :  <Navigate to="/login" replace={true} /> } />
          <Route path="/dashboard/orders" element={name ? <Orders /> :  <Navigate to="/login" replace={true} /> } />

          <Route path="/products" >
              <Route index element={<Products /> } />
              <Route path=":productId" element={<ProductId /> } />
              <Route path="*" element={<Products />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>

      </Router>
    </CartProvider>
    </>
  );
}

export default App;
