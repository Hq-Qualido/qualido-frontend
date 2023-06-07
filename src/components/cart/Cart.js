import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./Cart.css";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { useCart } from "react-use-cart";
import cartApi from "../../api/cart";
import { Helmet } from "react-helmet";

export default function Cart() {
  const { isEmpty, totalUniqueItems, items, totalItems, cartTotal, setItems } =
    useCart();

  const addToCart = async () => {
    const itemData = items.map((item) => {
      const { _id, quantity } = item;

      return { productId: _id, quantity };
    });

    await cartApi.add({
      totalUniqueItems,
      items: itemData,
      totalItems,
      cartTotal,
    });
  };

  const getCart = async () => {
    const res = await cartApi.getCart();
    console.log(res.data[0].items);
    setItems(res.data[0].items);
  };

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    addToCart();
  }, [totalItems]);

  if (isEmpty)
    return (
      <>
        <Helmet
          title="Shopping Cart | Qualido.in"
          content="This is your cart page of qualido webite"
          url="/cart"
        />
        <div className="cart-items-body">
          <div className="empty-cart">
            <lottie-player
              src="https://assets4.lottiefiles.com/private_files/lf30_e3pteeho.json"
              background="transparent"
              speed="1"
              style={{ width: "280px", height: "280px" }}
              loop
              autoplay
            ></lottie-player>
            <p>
              Your cart is empty!! <br /> Browse our products and add to your
              cart.
            </p>
            <Link to="/products" className="info-btn">
              Add Items
            </Link>
          </div>
        </div>
      </>
    );

  return (
    <>
      <Helmet
        title="Cart | Qualido"
        content="This is the cart page of qualido webite which is an e-commerce company aiming to provide and sell books to readers at much cheaper price than anywhere else."
        url="/cart"
      />
      <div className="cart-page">
        <div className="cart-items">
          <div className="cart-heading my-2">
            <div className="fs-3">
              Products in your cart ({totalUniqueItems})
            </div>
            <Link to="/products" className="add-btn">
              Add More
            </Link>
          </div>
          <div className="cart-items-body">
            {items?.map((item) => {
              return <CartCard {...item} key={item.id} />;
            })}
          </div>
        </div>
        <div className="cart-action">
          <div className="order-summary">
            <FaCheckCircle color="#03CD0B" fontSize={30} />
            <p>
              Your order is eligible for FREE Delivery, you can select this
              option at checkout. Details
            </p>
          </div>

          <div className="order-details fs-5">
            Subtotal ({totalItems} Items) :
            <span style={{ fontWeight: "500" }}> ₹ {cartTotal} </span>
          </div>
          <Link to={"/payment"} style={{ textDecoration: "none" }}>
            <div className="buy-btn">Proceed to Buy</div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
