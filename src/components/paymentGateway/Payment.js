import React, { useState } from "react";
import Address from "./Address";
import "./Gateway.css";
import OrderSummary from "./OrderSummary";
import PaymentMethods from "./PaymentMethods";
import PaymentSteps from "./PaymentSteps";
import { Link } from "react-router-dom";

export default function Payment() {
  const [steps, setSteps] = useState(1);
  return (
    <>
      <PaymentSteps step={steps} />

      <div className="payment_container p-2 mx-auto">
        {steps === 1 ? <Address /> : ""}
        {steps === 2 ? <OrderSummary /> : ""}
        {steps === 3 ? <PaymentMethods /> : ""}

        <div className="d-flex flex-row justify-content-center">
          <div
            className="cancel-btn  me-2"
            onClick={() => {
              setSteps(steps - 1);
            }}
          >
            {steps === 1 ? "Cancel" : "Previous"}
          </div>
          <div
            className="next-btn"
            onClick={() => {
              setSteps(steps + 1);
            }}
          >
            {steps !== 3 ? (
              "Next"
            ) : (
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Make Payment
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
