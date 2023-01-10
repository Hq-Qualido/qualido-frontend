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
        <table className="container">
          <tbody>
            <tr>
              <td>Price(2 items) </td>
              <td>Rs 45</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>-Rs 15</td>
            </tr>
            <tr>
              <td>Delivery Charge</td>
              <td>Rs 5</td>
            </tr>
            <tr className="border-top">
              <td> Subtotal (3 Items) :</td>
              <td className="fs-5" style={{ fontWeight: "500" }}>
                 Rs {456} 
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
