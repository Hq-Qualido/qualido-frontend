import React, { useState } from "react";
import { FaRedo, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";
import { baseUrl } from "../../BaseUrl";

export default function OtpPopup(props) {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  async function handleSubmit() {
    const response = await fetch(
      `${baseUrl}/auth/verifyOtp`,
      {
        method: "POST",
        body: JSON.stringify({
          email: props.userData.email,
          otp: otp.join(""),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.token) {
      navigate("/");
    } else {
      setErrorMessage(data.message);
    }
  }

  return (
    props.trigger && (
      <div className="popupPage ">
        <div className="popup">
          <div className="close" onClick={() => props.setTrigger(false)}>
            <FaTimes />
          </div>
          <h1 className="user-email my-3">
            Hi! 👋, <span> {props.userData.email}</span>
          </h1>
          <p>
            We've sent an OTP to the above provided mail , please enter the OTP
            to verify your mail.
          </p>

          <div
            id="otp"
            className="otp inputs d-flex flex-row justify-content-center mt-2"
          >
            {otp.map((data, index) => {
              return (
                <input
                  className="otp-field mx-1"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </div>

          <div className="otp-buttons  mt-4 ">
            <div
              className="clear-btn mx-1"
              onClick={(e) => setOtp([...otp.map((v) => "")])}
            >
              Clear
            </div>
            <div
              className="buy-btn mx-1"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Validate
            </div>
          </div>
          <div className="error-message">
            <FiAlertCircle /> {errorMessage}
          </div>
          <div className="resend-otp">
            Resend OTP
            <span className="mx-1">
              <FaRedo />
            </span>
          </div>
        </div>
      </div>
    )
  );
}
