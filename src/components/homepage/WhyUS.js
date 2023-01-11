import React from "react";

export default function WhyUS(props) {
  return (
    <>
      <div className="card_flip col-lg-4 col-sm-6">
        <div className="flip_content">
          <div className="front_card">
            <img className="whyUSImage" src={props.image} alt="" />
          </div>
          <div className="back_card p-2">
            <div className="fs-4 mb-1">{props.title}</div>
            <div className="text-center">{props.description}</div>
          </div>
        </div>
      </div>
    </>
  );
}
