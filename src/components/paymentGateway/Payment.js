import React, { useState } from "react";
import Address from "./Address";
import "./Gateway.css";
import OrderSummary from "./OrderSummary";
import PaymentMethods from "./PaymentMethods";
import PaymentSteps from "./PaymentSteps";
import { baseUrl } from "../../BaseUrl";

export default function Payment() {
  const [steps, setSteps] = useState(1);
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    fetch(`${baseUrl}/payment/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: "63a1f20352f650e580d1a80c", quantity: 3 },
          { id: "63adc3b1f6fd553ac41d48cf", quantity: 1 },
        ],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location.replace(url);
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  return (
    <>
      {!loading ? (
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
                  <div
                    // to="/payment/success"
                    onClick={handlePayment}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Make Payment
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        "Redirecting to stripe.."
      )}
    </>
  );
}
