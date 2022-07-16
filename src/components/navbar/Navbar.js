import React from "react";
import "./Navbar.css";
import { FaCartPlus, FaUserCircle, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logobagLIGHT from "../../assets/logobagLIGHT.png";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="nav-logo">
            <img src={logobagLIGHT} alt="qualidoLogo" className="mx-1" />{" "}
            Qualido
          </div>
        </Link>
        <form className="d-flex nav-searchBar" role="search">
          <input
            className="search-bar me-1"
            type="search"
            placeholder="Search items..."
            aria-label="Search"
          />
        </form>

        <div className="text-light nav-menu">
          <Link to="/cart" className="nav-menu-item mx-2">
            <FaCartPlus />
          </Link>
          <Link to="/login" className="nav-menu-item mx-2">
            <FaUserCircle />
          </Link>
        </div>
      </nav>
    </>
  );
}
