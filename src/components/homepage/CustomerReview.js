import React from 'react'
import { FaStar , FaStarHalf } from "react-icons/fa";

export default function CustomerReview(props) {
  return (
    <>
    
    <div className="review-card">
          <div className={props.classOfCard}>
            <div className="customer-rating my-2">
            <FaStar color="orange"/>
            <FaStar  color="orange"/>
            <FaStar color="orange" />
            <FaStar  color="orange"/>
            <FaStarHalf  color="orange"/>
            </div>
            <div className="customer-review my-2">
            {props.review}
            </div>

            <div className="customer-details">
              <img src={props.image} alt="customerPhoto" />
              <p>{props.name}</p>
            </div>
        </div>
          </div>

    </>
  )
}
