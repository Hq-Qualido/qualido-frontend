import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import './Cart.css'
import CartCard from './CartCard'

export default function Cart() {
  return (
    <>
        <div className="cart-page">


            <div className="cart-items">
            <div className="cart-heading">
                <h1>Products in your cart</h1>
                <div className="add-btn">Add More</div>
            </div>
            <div className="cart-items-body">
                <CartCard />
                <CartCard />
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
    </>
  )
}
