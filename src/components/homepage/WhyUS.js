import React from "react";

export default function WhyUS(props) {
  return (
    <>
      <div className="col-lg-4 col-sm-6 whyUsCard my-2">
        <img className="whyUSImage" src={props.image} alt="" />

        <h3 className="my-3">{props.title}</h3>
        <p className="text-center">
          {props.description}
        </p>
      </div>
    </>
  );
}
