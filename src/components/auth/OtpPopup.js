import React, { useState } from "react";
import { FaRedo, FaTimes } from "react-icons/fa";

export default function OtpPopup(props) {
  const [otpValue , steOtpValue] = useState([]);

    const handleChange=(e)=>{
      steOtpValue(otpValue => [...otpValue, e.target.value]);
    }

    async function handleSubmit(){

        const response = await fetch(
     ` https://qualido.herokuapp.com/api/auth/verifyOtp`,
     {
       method: "POST",
       body: JSON.stringify({
       email:props.userMail,
       otp:otpValue.join("")
       }),
       headers: {
         'Content-Type': 'application/json',
       }
     })
     const data =await response.json();
     console.log(data);
    }

  return (
    props.trigger && (
      <div className="popupPage ">
        <div className="popup">
          <div className="close" onClick={() => props.setTrigger(false)}>
            <FaTimes />
          </div>
          <h1 className="user-email my-3">
            Hi! 👋, <span> {props.userMail}</span>
          </h1>
          <p>
            We've sent an OTP to the above provided mail , please enter the OTP
            to verify your mail.
          </p>
       
          <div id="otp" className="otp inputs d-flex flex-row justify-content-center mt-2"
          >
            <input
              className="otp-input m-2 text-center form-control rounded"
              type="text"
              id="first"
              maxLength="1"
              value={otpValue[0]}
              onChange={handleChange}
            />
            <input
              className="otp-input m-2 text-center form-control rounded"
              type="text"
              id="second"
              maxLength="1"
              value={otpValue[1]}
              onChange={handleChange}
            />
            <input
              className="otp-input m-2 text-center form-control rounded"
              type="text"
              id="third"
              maxLength="1"
              value={otpValue[2]}
              onChange={handleChange}
            />
            <input
              className="otp-input m-2 text-center form-control rounded"
              type="text"
              id="fourth"
              maxLength="1"
              value={otpValue[3]}
              onChange={handleChange}
            />
            <input
              className="otp-input m-2 text-center form-control rounded"
              type="text"
              id="fifth"
              maxLength="1"
              value={otpValue[4]}
              onChange={handleChange}
            />
            <input
              className="otp-input m-2 text-center form-control rounded"
              type="text"
              id="sixth"
              maxLength="1"
              value={otpValue[5]}
              onChange={handleChange}
            />
          </div>

          <div className="buy-btn my-4" onClick={handleSubmit}>Validate</div>
          <div className="resend-otp" onClick={handleSubmit}>Resend OTP  <span className="mx-1"> <FaRedo /> </span>  </div>
        </div>
      </div>
    )
  );
}
