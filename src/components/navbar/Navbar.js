import React, { useState } from "react";
import "./Navbar.css";
import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logobagLIGHT from "../../assets/logobagLIGHT.png";
import { useCart } from "react-use-cart";

export default function Navbar(props) {
  const navigate = useNavigate();
  const [searchResult,setSearchResult]=useState('');

  const {
    totalUniqueItems,
  } = useCart();

  async function handleSearch(e){
    e.preventDefault()
    const url = `https://qualido.herokuapp.com/api/products/search?tags=${searchResult}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  
  return (
    <>
      <nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="nav-logo">
            <img src={logobagLIGHT} alt="qualidoLogo" className="mx-1" />{" "}
            Qualido
          </div>
        </Link>
        <form className="d-flex nav-searchBar" role="search" onSubmit={handleSearch}>
        <span className="search-icon"> <FaSearch /> </span>
          <input
            className="search-bar me-1"
            type="search"
            placeholder="Search items..."
            aria-label="Search"
            value={searchResult}
            onChange={((e)=>{
              setSearchResult(e.target.value);
              navigate("/products");
            })}
          />
        </form>

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
