import React from "react";

export default function PaymentSteps(props) {
  return (
    <>
      <div className="steps d-flex flex-row justify-content-evenly my-3">
        <div className="step1 d-flex flex-column justify-content-center align-items-center">
          <span
            className={` d-flex justify-content-center align-items-center border border-${
              props.step === 1 ? "primary" : "secondary"
            } rounded-circle p-2 text-${
              props.step === 1 ? "primary" : "secondary"
            }`}
            style={{ height: "20px", width: "20px" }}
          >
            1
          </span>
          <span
            className={`text-${props.step === 1 ? "primary" : "secondary"}`}
          >
            Address
          </span>
        </div>

        <div className="step1 d-flex flex-column justify-content-center align-items-center">
          <span
            className={` d-flex justify-content-center align-items-center border border-${
              props.step === 2 ? "primary" : "secondary"
            } rounded-circle p-2 text-${
              props.step === 2 ? "primary" : "secondary"
            }`}
            style={{ height: "20px", width: "20px" }}
          >
            2
          </span>
          <span
            className={`text-${props.step === 2 ? "primary" : "secondary"}`}
          >
            Order Summary
          </span>
        </div>

        <div className="step1 d-flex flex-column justify-content-center align-items-center">
          <span
            className={` d-flex justify-content-center align-items-center border border-${
              props.step === 3 ? "primary" : "secondary"
            } rounded-circle p-2 text-${
              props.step === 3 ? "primary" : "secondary"
            }`}
            style={{ height: "20px", width: "20px" }}
          >
            3
          </span>
          <span
            className={`text-${props.step === 3 ? "primary" : "secondary"}`}
          >
            Payment
          </span>
        </div>
      </div>
    </>
  );
}
