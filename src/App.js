import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CartProvider } from "react-use-cart";

import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import ProductId from "./components/products/ProductId";
import Error from "./components/error/Error";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Cart from "./components/cart/Cart";
import Dashboard from "./components/dashboard/Dashboard";
import Wishlist from "./components/dashboard/Wishlist";
import Orders from "./components/dashboard/Orders";
import Security from "./components/dashboard/Security";
import MyAddresses from "./components/dashboard/MyAddresses";
import PrivacyPolicy from "./components/documents/PrivacyPolicy";
import Feedback from "./components/feedback/Feedback";
import Payment from "./components/paymentGateway/Payment";
import "./index.css";
import useToken from "./hooks/useToken";
import Community from "./components/community/Community";

function App() {
  const { name, token } = useToken();
  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/community" element={<Community />} />

            <Route
              path="/login"
              element={token ? <Navigate to="/dashboard" replace /> : <Login />}
            />
            <Route path="/signup" element={<Register />} />

            <Route path="/payment" element={<Payment />} />
            <Route
              path="/feedback"
              element={
                name ? <Feedback /> : <Navigate to="/login" replace={true} />
              }
            />
            <Route
              path="/dashboard"
              element={
                token ? <Dashboard /> : <Navigate to="/login" replace={true} />
              }
            />
            <Route
              path="/dashboard/wishlist"
              element={
                token ? <Wishlist /> : <Navigate to="/login" replace={true} />
              }
            />
            <Route
              path="/dashboard/orders"
              element={
                token ? <Orders /> : <Navigate to="/login" replace={true} />
              }
            />
            <Route
              path="/dashboard/security"
              element={
                token ? <Security /> : <Navigate to="/login" replace={true} />
              }
            />
            <Route
              path="/dashboard/my-addresses"
              element={
                token ? (
                  <MyAddresses />
                ) : (
                  <Navigate to="/login" replace={true} />
                )
              }
            />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="/products">
              <Route index element={<Products />} />
              <Route path=":productId" element={<ProductId />} />
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
