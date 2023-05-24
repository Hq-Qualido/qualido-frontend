import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

import "./Dashboard.css";
import DashCards from "./DashCards.js";
import useToken from "../../hooks/useToken";
import { useCart } from "react-use-cart";
import authApi from "../../api/auth";

export default function Dashboard() {
  const navigate = useNavigate();
  const { name, removeToken, setName, setToken, token, removeName } =
    useToken();

  const { emptyCart } = useCart();

  // const { state } = useLocation();

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

  useEffect(() => {
    if (cookieValue && !token) fetchData();
  }, []);

  const handleLogout = () => {
    document.cookie = "auth_token=;";
    removeName();
    removeToken();
    emptyCart();
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="container my-5">
            <div className="dashboard-top my-2">
              <div className="p-2 fs-2 section-heading ">Hello 👋, {name}</div>
              <div className="logout text-center " onClick={handleLogout}>
                <span className="me-1">
                  <FaSignOutAlt />
                </span>
                LogOut
              </div>
            </div>

            <Outlet />

            <div className="row dashboard-row">
              <DashCards
                url="orders"
                image="FaBoxOpen"
                title="My Orders"
                description="Track , return , check history or buy things again."
              />
              <DashCards
                url="wishlist"
                image="FaGift"
                title="Wishlist"
                description="Browse your personalized collections of products ."
              />
              <DashCards
                url="security"
                image="FaUserLock"
                title="Login & Security"
                description="Edit login, , name , mobile number , address."
              />
              <DashCards
                url="my-addresses"
                image="TiLocation"
                title="My Addresses"
                description="Edit addresses for your orders and gifts."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
