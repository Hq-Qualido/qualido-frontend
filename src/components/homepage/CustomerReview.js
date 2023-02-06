import React from "react";
import { FaStar } from "react-icons/fa";

export default function CustomerReview(props) {
  return (
    <>
      <div className="review-card">
        <div className={props.classOfCard}>
          <div className="customer_detail d-flex flex-column justify-content-start align-items-start">
            {/* <div className="customer_pic">
              <img src={props.image} alt="sd" />
            </div> */}
            <div className="customer_name">
              {props.name} , { props.location}
            </div>
            <div className="customer-rating mb-1 text-warning d-flex flex-row justify-content-center align-items-center">
             {props.rating} <FaStar />
            </div>
          </div>
          <div className="customer-review my-2">{props.review}</div>
        </div>
      </div>
    </>
  );
}
