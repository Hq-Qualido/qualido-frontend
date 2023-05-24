import { useLocation, Navigate, Outlet } from "react-router-dom";

import useToken from "../../hooks/useToken";
import { useCart } from "react-use-cart";
import { useEffect } from "react";
import cartApi from "../../api/cart";
import authApi from "../../api/auth";

export function ProtectedRoutes() {
  const { token, setName, setToken } = useToken();
  const location = useLocation();

  const { setItems, items } = useCart();

  const getCart = async () => {
    const res = await cartApi.getCart();
    // setItems([...res.data[0].items, ...items]);
    setItems(res.data[0].items);
  };

  const cookieValue = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("auth_token"))
    ?.split("=")[1];

  const fetchData = async () => {
    const res = await authApi.getUser(cookieValue);
    setName(res.data.user.fullname);
    setToken(res.data.token);
    return window.location.replace("/dashboard");
  };

  // useEffect(() => {
  // }, []);

  useEffect(() => {
    if (cookieValue && !token) fetchData();
    getCart();
  }, []);

  return token ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace state={{ from: location.pathname }} />
  );
}
