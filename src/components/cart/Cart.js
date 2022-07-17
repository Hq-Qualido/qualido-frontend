import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import './Cart.css'
import CartCard from './CartCard'
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';

export default function Cart() {
  return (
    <>
        <div className="cart-page">

            <div className="cart-items">
            <div className="cart-heading my-2">
                <h1>Products in your cart</h1>
                <Link to="/products" className="add-btn">Add More</Link>
            </div>
            <div className="cart-items-body">
                <CartCard />
                <CartCard />
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
                <Link to="/products" className="info-btn">Add Items</Link>
          </div>
            </div>
            </div>



            <div className="cart-action">
            <div className='order-summary'> <FaCheckCircle color='#03CD0B' fontSize={30}/> 
                <p> Your order is eligible for FREE Delivery, you can select this option at checkout. Details</p>
            </div>

            <div className="order-details">
              Subtotal (4 Items) : $567
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
