import React from "react";
import "./Dashboard.css";
import DashCards from "./DashCards.js";
import { Outlet, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

export default function Dashboard(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("Name");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="container my-5">
            <div className="dashboard-top my-2">
              <h1 className="text-center section-heading ">
                Hello 👋, {props.name}
              </h1>
              <div className="logout" onClick={handleLogout}>
                {" "}
                <span>
                  {" "}
                  <FaSignOutAlt />{" "}
                </span>{" "}
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
