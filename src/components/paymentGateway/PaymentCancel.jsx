import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

export default function PaymentCancel() {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="col-lg-6 col-sm-6 my-5 d-flex flex-column justify-content-center shadow-sm rounded rounded-3">
          <div className="my-4">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_P7BPtXPF6l.json"
              background="transparent"
              speed="1"
              style={{ width: "auto", height: "250px" }}
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="fs-2 text-center">Payment Cancelled!</div>

          <div className="container d-flex flex-wrap justify-content-center align-items-center">
            <Link to="/products" className="cancel-btn text-decoration-none">
              Continue Shopping
            </Link>
            <Link
              to="/cart"
              className="next-btn text-decoration-none text-white mx-2"
            >
              Go To Cart
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
