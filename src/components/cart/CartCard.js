import React from 'react'
import { useCart } from "react-use-cart";

export default function CartCard(props) {
    console.log(props,"CartCardPRops")
    const {
        removeItem,
      } = useCart();

  return (
    <>
    <div className="cart-card">
        <div className="cart-image">
            <img src={props.indivProd.thumbnailUrl} alt="" />
        </div>
        <div className="cart-details">
            <h3 className="item-name">{props.indivProd.prodName}</h3>
    {   props.indivProd.inStock?
            (<div className="In-Stock">In Stock</div>
                ): (<div className="Currently-Unavailable">Currently-Unavailable</div>)
    }
            <div className="price">
                Rs.{ props.indivProd.prodMrp } <span className='quantity'> Quantity ({props.quantity})</span>
            </div>
        </div>

        <div className="buttons">
        <div className="remove-btn mx-1" onClick={()=>removeItem(props.id)}>
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

