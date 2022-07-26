import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";

export default function CartCard(props) {
    console.log(props,"CartCardPRops")
    const {
        removeItem,
        updateItemQuantity,
      } = useCart();

  return (
    <>
    <div className="cart-card">
        <div className="cart-image">
        <Link to={`/products/${props.indivProd._id}`} >
            <img src={props.indivProd.thumbnailUrl} alt="" />
            </Link>

        </div>
        <div className="cart-details">

           <Link to={`/products/${props.indivProd._id}`} >
            <h5 className="item-name">{props.indivProd.prodName}</h5>
           </Link>
           <div className='author-name'>Author : {props.indivProd.authorName}</div>
    {   props.indivProd.inStock?
            (<div className="In-Stock">In Stock</div>
                ): (<div className="Currently-Unavailable">Currently-Unavailable</div>)
    }


    <div className="set-quantity mt-1">
    <span className='mx-1'>Quantity:   </span> 
    <button
                        onClick={() =>
                          updateItemQuantity(props.id, props.quantity - 1)
                        }
                        className="set-count-btn "
                      >
                      -
                      </button>
                      <span  className='quantity mx-1' >  { props.quantity } </span>
                      <button
                        onClick={() =>
                          updateItemQuantity(props.id, props.quantity + 1)
                        }
                        className="set-count-btn"
                      >
                      +
                      </button>
    </div>
            <div className="price">
                Rs.{ props.indivProd.prodMrp } 
            </div>
        </div>

        <div className="buttons">
        <div className="remove-btn mx-1" onClick={()=>removeItem(props.id)}>
            Remove
        </div>
        </div>

    </div>
    </>
  )
}

