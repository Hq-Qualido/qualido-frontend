import React from "react";
import {  FaCartPlus, FaStar , FaStarHalf } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

export default function ProductCard(props) {
  // console.log(props,"items");
  const navigate = useNavigate();
  const handleNavigate =()=>{
    console.log("navigator")
    navigate(`/products/${props._id}`)
  }
  const { addItem } = useCart();
  
  return (
    <>{!props.navigator ?(

      <div className=" product-card ">
        <div className="product-image">
    <Link to={`${props._id} `} style={{textDecoration:"none"}}>
          <img src={props.url} alt="" />
              </Link>
          <div className="over-image">
              <span className="save-percentage">
           Save {props.discount}% 
           </span>
           <span className="wishlist-btn my-2"
                 onClick={() => addItem({
                id:props._id,
                price:props.prodMrp,
                ...props,
                })}
              >
              <FaCartPlus />
              </span>
            </div>
        </div>

        <div className="product-details">
          <h3 className="product-title mt-2">
    <Link to={`${props._id} `} style={{textDecoration:"none"}}>
          {props.prodName.length>15? (props.prodName.slice(0,15)+"...") : props.prodName }
              </Link>
          </h3>
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
    )
    
    :
    ( <div className=" product-card " onClick={handleNavigate}>
        <div className="product-image">
          <img src={props.url} alt="" />
          <div className="over-image">
              <span className="save-percentage">
           Save {props.discount}% 
           </span>
              <span className="wishlist-btn my-2"
              onClick={() => addItem({
                id:props._id,
                price:props.prodMrp,
                ...props,
                })}
                
              >
              <FaCartPlus />
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
