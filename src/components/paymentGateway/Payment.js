import React, { useEffect, useState, useContext } from "react";
import Address from "./Address";
import "./Gateway.css";
import OrderSummary from "./OrderSummary";
import PaymentMethods from "./PaymentMethods";
import PaymentSteps from "./PaymentSteps";
import PaymentHandler from "../../api/payment";
import useApi from "../../hooks/useApi";
import CartDataContext from "../../hooks/CartContext";

export default function Payment() {
  const { cartData } = useContext(CartDataContext);
  console.log(cartData, "cartData");
  const [steps, setSteps] = useState(1);
  const {
    data: payData,
    res: payResp,
    loading,
    error,
    request,
    networkError,
  } = useApi(PaymentHandler.createPayment);

  async function handlePayment() {
    try {
      await request({ items: cartData });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (payData && !error && !loading) {
      return window.location.replace(payResp.data.url);
    } else if (error) {
      console.log(error);
    } else if (networkError) {
      console.log(networkError);
    }
  }, [payData, error, loading, payResp, networkError]);

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
