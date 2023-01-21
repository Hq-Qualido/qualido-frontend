import React, { useState } from "react";
import "./Navbar.css";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logobagLIGHT from "../../assets/logobagLIGHT.png";
import { useCart } from "react-use-cart";
import SearchBar from "./SearchBar";

export default function Navbar(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { totalUniqueItems } = useCart();

  const space = props.name && props.name.indexOf(" ");
  const firstName =  props.name && props.name.substring(0, space);
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
              {" "}
              <FaShoppingCart />{" "}
            </span>{" "}
            Cart({totalUniqueItems})
          </Link>
          <Link
            to="dashboard"
            className="nav-menu-item"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            <span>
              {" "}
              <FaUserCircle />{" "}
            </span>{" "}
            {props.name ? firstName : "Account"}
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
