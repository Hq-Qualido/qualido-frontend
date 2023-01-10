import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductId from "./components/products/ProductId";
import Error from "./components/error/Error";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Cart from "./components/cart/Cart";
import { CartProvider } from "react-use-cart";
import Dashboard from "./components/dashboard/Dashboard";
import Wishlist from "./components/dashboard/Wishlist";
import Orders from "./components/dashboard/Orders";
import Security from "./components/dashboard/Security";
import PrivacyPolicy from "./components/documents/PrivacyPolicy";
import Feedback from "./components/feedback/Feedback";
import Payment from "./components/paymentGateway/Payment";

function App() {
  const name = localStorage.getItem("Name");
  return (
    <>
      <CartProvider>
        <Router>
          <Navbar name={name} />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route
              path="/dashboard"
              element={
                name ? (
                  <Dashboard name={name} />
                ) : (
                  <Navigate to="/login" replace={true} />
                )
              }
            />
            <Route
              path="/dashboard/wishlist"
              element={
                name ? <Wishlist /> : <Navigate to="/login" replace={true} />
              }
            />
            <Route
              path="/dashboard/orders"
              element={
                name ? <Orders /> : <Navigate to="/login" replace={true} />
              }
            />
            <Route
              path="/dashboard/security"
              element={
                name ? <Security /> : <Navigate to="/login" replace={true} />
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
