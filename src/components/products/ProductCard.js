import React from "react";
import {  FaStar , FaStarHalf } from "react-icons/fa";
import {MdOutlineFavoriteBorder} from 'react-icons/md';
import { Link, useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  // console.log(props,"items");
  const navigate = useNavigate();
  const handleNavigate =()=>{
    console.log("navigator")
    navigate(`/products/${props._id}`)
  }

  return (
    <>{!props.navigator ?(
    <Link to={`${props._id} `} style={{textDecoration:"none"}}>

      <div className=" product-card ">
        <div className="product-image">
          <img src={props.url} alt="" />
          <div className="over-image">
              <span className="save-percentage">
           Save {props.discount}% 
           </span>
              <span className="wishlist-btn my-2">
              <MdOutlineFavoriteBorder/>
              </span>
            </div>
        </div>

        <div className="product-details">
          <h3 className="product-title">{props.prodName}</h3>
          <div className="price-rating">
            <h3 className="product-price">Rs {props.prodMrp} <span style={{textDecoration:"line-through" , color:"grey" , fontSize:"15px "}}>{props.prodSp}</span> </h3>
            <div className="products-ratings">
            <FaStar color="orange"/>
            <FaStar  color="orange"/>
            <FaStar color="orange" />
            <FaStar  color="orange"/>
            <FaStarHalf  color="orange"/>
            </div>
          </div>
        </div>

      </div>
    </Link>)
    
    :
    ( <div className=" product-card " onClick={handleNavigate}>
        <div className="product-image">
          <img src={props.url} alt="" />
          <div className="over-image">
              <span className="save-percentage">
           Save {props.discount}% 
           </span>
              <span className="wishlist-btn my-2">
              <MdOutlineFavoriteBorder/>
              </span>
            </div>
        </div>

        <div className="product-details">
          <h3 className="product-title">{props.prodName}</h3>
          <div className="price-rating">
            <h3 className="product-price">Rs {props.prodMrp} <span style={{textDecoration:"line-through" , color:"grey" , fontSize:"15px "}}>{props.prodSp}</span> </h3>
            <div className="products-ratings">
            <FaStar color="orange"/>
            <FaStar  color="orange"/>
            <FaStar color="orange" />
            <FaStar  color="orange"/>
            <FaStar  color="orange"/>
            </div>
          </div>
        </div>

      </div>)
    }
    </>
  );
}
