import React from "react";
import "./Navbar.css";
import { FaShoppingCart, FaUserCircle} from "react-icons/fa";
import { Link } from "react-router-dom";
import logobagLIGHT from "../../assets/logobagLIGHT.png";
import { useCart } from "react-use-cart";
import SearchBar from "./SearchBar";

export default function Navbar(props) {
  const {
    totalUniqueItems,
  } = useCart();

  return (
    <>
      <nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="nav-logo">
            <img src={logobagLIGHT} alt="qualidoLogo" className="mx-1" />{" "}
            Qualido
          </div>
        </Link>

        <SearchBar />
        <div className="text-light nav-menu">
          <Link to="/cart" className="nav-menu-item">
           <span> <FaShoppingCart />   </span> Cart({totalUniqueItems})
          </Link>
          <Link to="dashboard" className="nav-menu-item">
          <span> <FaUserCircle />  </span>   {props.name? props.name : "Account"}
          </Link>
        </div>
      </nav>
    </>
  );
}
