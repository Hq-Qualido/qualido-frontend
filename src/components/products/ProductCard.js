import React from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

export default function ProductCard(props) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    console.log("navigator");
    navigate(`/products/${props._id}`);
  };
  const { addItem } = useCart();

  return (
    <>
      {!props.navigator ? (
        <div className=" product-card ">
          <div className="product-image">
            <Link to={`${props._id} `} style={{ textDecoration: "none" }}>
              <img src={props.url} alt="" />
            </Link>
            <div className="over-image">
              <span className="save-percentage">Save {props.discount}%</span>
              <span
                className="wishlist-btn my-2"
                onClick={() =>
                  addItem({
                    id: props._id,
                    price: props.prodSp,
                    ...props,
                  })
                }
              >
                <FaCartPlus />
              </span>
            </div>
          </div>

          <div className="product-details">
            <div className="product-title mt-2 fs-5">
              <Link to={`${props._id} `} style={{ textDecoration: "none" }}>
                {props.prodName.length > 15
                  ? props.prodName.slice(0, 15) + "..."
                  : props.prodName}
              </Link>
            </div>
            <div className="price-rating">
              <div className="product-price">
                Rs {props.prodSp}{" "}
                <span className="line_through_text">{props.prodMrp}</span>
              </div>
              <div style={{ color: "orange" }} className="d-flex flex-row ">
                <span className="me-1"> 4.5 </span>{" "}
                <span className="d-flex justify-content-center align-items-center">
                  <FaStar />
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" product-card " onClick={handleNavigate}>
          <div className="product-image">
            <img src={props.url} alt="" />
            <div className="over-image">
              <span className="save-percentage">
                {props.discount ? "Save" + props.discount + "%" : ""}
              </span>
              <span
                className="wishlist-btn my-2"
                onClick={() =>
                  addItem({
                    id: props._id,
                    price: props.prodSp,
                    ...props,
                  })
                }
              >
                <FaCartPlus />
              </span>
            </div>
          </div>

          <div className="product-details">
            <div className="product-title mt-2 fs-5">
              <Link to={`${props._id} `} style={{ textDecoration: "none" }}>
                {props.prodName.length > 15
                  ? props.prodName.slice(0, 15) + "..."
                  : props.prodName}
              </Link>
            </div>{" "}
            <div className="price-rating">
              <div className="product-price">
                Rs {props.prodMrp}{" "}
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "grey",
                    fontSize: "15px ",
                  }}
                >
                  {props.prodSp}
                </span>{" "}
              </div>
              <div style={{ color: "orange" }}>
                <span className="me-1"> 4.5 </span>{" "}
                <span className="d-flex justify-content-center align-items-center">
                  <FaStar />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
