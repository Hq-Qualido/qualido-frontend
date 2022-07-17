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
    
            {/* <div className="save-percentage">Save 100%</div> */}
            <div className="In-Stock my-1">In Stock</div>

            
            <div className="price">
                $599 <span style={{textDecoration:"line-through"}}>699</span>
            </div>
        </div>

        <div className="buttons">
        <div className="remove-btn mx-1">
            Remove
        </div>
        <div className="info-btn mx-1">
             More Info
        </div>
        </div>

    </div>
    </>
  )
}

