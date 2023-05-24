import React, { useState } from "react";
import "./Navbar.css";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
// import { RiChatSmile3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logobagLIGHT from "../../assets/logobagLIGHT.png";
import { useCart } from "react-use-cart";
import SearchBar from "./SearchBar";
import useToken from "../../hooks/useToken";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { totalUniqueItems } = useCart();

  const { name } = useToken();

  const space = name && name.indexOf(" ");
  const firstName = name && name.substring(0, space);

  return (
    <>
      <nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="nav-logo">
            <img src={logobagLIGHT} alt="qualidoLogo" className="mx-1" />{" "}
          </div>
        </Link>

        <SearchBar />
        <div className={isExpanded ? "nav-menu expanded" : "nav-menu"}>
          <Link
            to="/cart"
            className="nav-menu-item"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            <span>
              <FaShoppingCart />
            </span>
            Cart({totalUniqueItems})
          </Link>
          {/* <Link
            to="community"
            className="nav-menu-item"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            <span>
              <RiChatSmile3Fill />
            </span>
            Chat
          </Link> */}
          <Link
            to="dashboard"
            className="nav-menu-item"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            <span>
              <FaUserCircle />
            </span>
            {name ? firstName : "Account"}
          </Link>
        </div>
        <div
          className="nav-btns fs-3"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {!isExpanded ? <HiMenuAlt3 /> : <HiX />}
        </div>
      </nav>
    </>
  );
}
