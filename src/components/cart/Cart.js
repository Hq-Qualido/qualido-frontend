import React,{useEffect} from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import './Cart.css'
import CartCard from './CartCard'
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';
import { useCart } from "react-use-cart";

export default function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
  } = useCart();

  const addToCart = async () => {
    const response = await fetch(` https://qualido.herokuapp.com/api/cart/add`,
    {
        method: "PUT",
        body: JSON.stringify(items),
        headers: {'Content-Type': 'application/json'}
    })
    const data =await response.json();
         console.log(data,"data") 

  }
  
  useEffect(()=>{
    addToCart();  
    // eslint-disable-next-line
  },[totalItems]);


  if (isEmpty) return (     
    <div className="cart-items-body">

    <div className="empty-cart">
        <lottie-player
        src="https://assets4.lottiefiles.com/private_files/lf30_e3pteeho.json"
        background="transparent"
        speed="1"
        style={{width: "280px", height: "280px"}}
        loop
        autoplay
      ></lottie-player>
      <p>Your cart is empty!! <br /> Browse our products and add to your cart.</p>
    <Link to="/products" className="info-btn">Add   Items</Link>
    </div>
    </div>          
);

  return (
    <>
        <div className="cart-page">

            <div className="cart-items">
            <div className="cart-heading my-2">
                <h1>Products in your cart ({totalUniqueItems})</h1>
                <Link to="/products" className="add-btn">Add More</Link>
            </div>
            <div className="cart-items-body">
            {items?.map((item)=>{
              return (
                <CartCard {...item} key={item.id} />
              )
            })}
            </div>
            </div>

            <div className="cart-action">
            <div className='order-summary'> <FaCheckCircle color='#03CD0B' fontSize={30}/> 
                <p> Your order is eligible for FREE Delivery, you can select this option at checkout. Details</p>
            </div>

            <div className="order-details">
              Subtotal ({totalItems} Items) : Rs { cartTotal}
            </div>
            <div className="buy-btn">
              Proceed to Pay
            </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
