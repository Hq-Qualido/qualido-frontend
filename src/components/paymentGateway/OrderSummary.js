import React from "react";
import Clothing from "../../assets/Clothing.svg";

export default function OrderSummary() {
  return (
    <>
      <div className="border-bottom p-2 d-flex flex-row">
        <img
          className="my-2 my-auto"
          style={{ width: "100px" }}
          src={Clothing}
          alt=""
        />
        <div className="my-auto mx-1">
          <div className="text-dark overflow-hidden">Product Name</div>
          <div className="text-secondary overflow-hidden">Quantity=1</div>
        </div>
        <div className="text-secondary my-auto ms-auto me-1">Rs 456</div>
      </div>

      <div className="border-bottom p-2 d-flex flex-row">
        <img
          className="my-2 my-auto"
          style={{ width: "100px" }}
          src={Clothing}
          alt=""
        />
        <div className="my-auto mx-1">
          <div className="text-dark overflow-hidden">Product Name</div>
          <div className="text-secondary overflow-hidden">Quantity=1</div>
        </div>
        <div className="text-secondary my-auto ms-auto me-1">Rs 456</div>
      </div>

      <div className="my-3">
        <div className="fs-5 text-center" style={{ fontWeight: "500" }}>
          Price Details
        </div>
        <div className="container">
          <div className="d-flex flex-row justify-content-between my-1 p-1">
            <div>Price(2 items)</div>
            <div>Rs 45</div>
          </div>

          <div className="d-flex flex-row justify-content-between my-1 p-1">
            <div>Discount</div>
            <div>-Rs 5</div>
          </div>

          <div className="d-flex flex-row justify-content-between my-1 p-1">
            <div>Delivery Charge</div>
            <div>Rs 10</div>
          </div>

          <div className="border-top d-flex flex-row justify-content-between my-2 p-2 fs-5">
            <div> Subtotal (3 Items) : </div>
            <div style={{ fontWeight: "500" }}>Rs {456} </div>
          </div>
        </div>
      </div>
    </>
  );
}
