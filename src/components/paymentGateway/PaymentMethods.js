import React, { useState } from "react";

export default function PaymentMethods() {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <>
      <div className="text-center my-1"> Select Payment method :-</div>
      <div className="payment_methods mx-auto d-flex flex-row">
        <div
          className={`${
            paymentMethod === "cod"
              ? "border border-2 border-primary text-primary "
              : ""
          } container p-2 my-1 border border-2 rounded me-1`}
          onClick={() => {
            setPaymentMethod("cod");
          }}
        >
          Cash on delivery
        </div>
        <div
          className={`${
            paymentMethod === "online"
              ? "border border-2 border-primary text-primary"
              : ""
          } container p-2 my-1 border border-2 rounded ms-1`}
          onClick={() => {
            setPaymentMethod("online");
          }}
        >
          Pay Online
        </div>
      </div>
      {/* 
        <div className="buy-btn">
          {paymentMethod === "" ? "Place Order" : ""}
          {paymentMethod === "cod" ? "Place Order" : ""}
          {paymentMethod === "online" ? "Proced to pay" : ""}
        </div> */}
    </>
  );
}
