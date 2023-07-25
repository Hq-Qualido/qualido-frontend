import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  // useLocation,
} from "react-router-dom";
import {
  CartProvider,
  //  useCart
} from "react-use-cart";

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
import { ProtectedRoutes } from "./components/utils/ProtectedRoutes";
import authApi from "./api/auth";
import BlogPage from "./components/blog/BlogPage";
import RefundPolicy from "./components/documents/RefundPolicy";
import TermsConditions from "./components/documents/TermsConditions";
import Support from "./components/documents/Support";
import PaymentSuccess from "./components/paymentGateway/PaymentSuccess";
import PaymentCancel from "./components/paymentGateway/PaymentCancel";
import CartDataContext from "./hooks/CartContext";
// import { checkCookieAndExecuteAction } from "./components/utils/checkCookie";

function App() {
  const { name, token, setName, setToken } = useToken();
  // const { state } = useLocation();
  const [cartData, setCartData] = useState([]);

  const cookieValue = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("auth_token"))
    ?.split("=")[1];

  const fetchData = async () => {
    const res = await authApi.getUser(cookieValue);
    setName(res.data.user.fullname);
    setToken(res.data.token);
    return window.location.reload();
  };

  useEffect(() => {
    if (!token) fetchData();
    // checkCookieAndExecuteAction("auth_token", fetchData, 5000).then((r) =>
    //   console.log(r)
    // );
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <CartProvider>
        <CartDataContext.Provider value={{ cartData, setCartData }}>
          <Router>
            <Navbar />
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/blog" element={<BlogPage />} />

              {!token && (
                <>
                  <Route
                    path="/login"
                    element={
                      token ? <Navigate to="/dashboard" replace /> : <Login />
                    }
                  />
                  <Route path="/signup" element={<Register />} />
                </>
              )}
              <Route element={<ProtectedRoutes />}>
                <Route path="/payment" element={<Payment />} />
                <Route path="/payment/success" element={<PaymentSuccess />} />
                <Route path="/payment/cancel" element={<PaymentCancel />} />
                <Route
                  path="/feedback"
                  element={
                    name ? (
                      <Feedback />
                    ) : (
                      <Navigate to="/login" replace={true} />
                    )
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    token ? (
                      <Dashboard />
                    ) : (
                      <Navigate to="/login" replace={true} />
                    )
                  }
                />
                <Route
                  path="/dashboard/wishlist"
                  element={
                    token ? (
                      <Wishlist />
                    ) : (
                      <Navigate to="/login" replace={true} />
                    )
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
                    token ? (
                      <Security />
                    ) : (
                      <Navigate to="/login" replace={true} />
                    )
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
              </Route>

              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsConditions />}
              />
              <Route path="/support" element={<Support />} />

              <Route path="/products">
                <Route index element={<Products />} />
                <Route path=":productId" element={<ProductId />} />
                <Route path="*" element={<Products />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        </CartDataContext.Provider>
      </CartProvider>
    </>
  );
}

export default App;
