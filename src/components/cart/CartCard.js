import React from 'react'
import book from '../../assets/book.png'


export default function CartCard() {
  return (
    <>
    <div className="cart-card">
        <div className="cart-image">
            <img src={book} alt="" />
        </div>
        <div className="cart-details">
            <h3 className="item-name">The Best Book Bro</h3>
            <div className="inStock">
                In Stock
            </div>
            <div className="price">
                $599 <span style={{textDecoration:"line-through"}}>699</span>
            </div>
        </div>
        <div className="buttons">

        <div className="delete-btn mx-1">
            Delete Item
        </div>
        <div className="view-more-btn mx-1">
            View More
        </div>
        </div>
    </div>
    </>
  )
}

