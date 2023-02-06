import React, { useEffect, useState } from "react";

import { FaRedo, FaTimes } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import useApi from "../../hooks/useApi";
import authApi from "../../api/auth";
import useToken from "../../hooks/useToken";

export default function OtpPopup(props) {

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [errorMessage, setErrorMessage] = useState("");

  const {
    data: verifyOtpData,
    request: verifyOtp,
    loading,
    error,
    networkError,
  } = useApi(authApi.verifyOtp);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const { setToken, setName } = useToken();

  async function handleSubmit() {
    verifyOtp({
        email: props.userData.email,
        otp: otp.join(""),
    })
  }

  useEffect(() => {
    if (verifyOtpData && !error && !loading) {
      console.log(verifyOtpData , "verfotpdata")
      setName(verifyOtpData.user.fullname);
      setToken(verifyOtpData.token);
      window.location.replace("/dashboard")
    } else if (error) {
      setErrorMessage(error);
      console.log(error);
    } else if (networkError) {
      console.log(networkError);
    }
  }, [verifyOtpData, networkError]);

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
             {errorMessage?<>
              <FiAlertCircle />
              {errorMessage}
            </>
               :""}
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
