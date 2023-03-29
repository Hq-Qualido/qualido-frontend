import React from "react";
import { FaStar } from "react-icons/fa";

export default function CustomerReview(props) {
  return (
    <>
      <div className="review-card">
        <div className={props.classOfCard}>
          <div className="customer_detail d-flex flex-row justify-content-start align-items-start">
            <div className="customer_pic m-1">
              <img src={props.image} alt="customer" />
            </div>
            <div>
              <div className="customer_name text-left">
                {props.name} , {props.location}
              </div>
              <div className="customer-rating mb-1 text-warning">
                {props.rating} <FaStar />
              </div>
            </div>
          </div>
          <div className="customer-review my-2">{props.review}</div>
        </div>
      </div>
    </>
  );
}
