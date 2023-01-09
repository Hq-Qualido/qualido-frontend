import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaRegFrown } from "react-icons/fa";
import { baseUrl } from "../../BaseUrl";

import LoginGirl from "../../assets/loginGirl.png";
import google from "../../assets/google.png";
import OtpPopup from "./OtpPopup";

export default function Register() {
  const [popup, setPopup] = useState(false);

  const [fullnameError, setFullnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [createPassError, setCreatePassError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");

  const [userData, setUserData] = useState({
    email: "",
    fullname: "",
    createPass: "",
    confirmPass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  async function handleSubmit() {
    if (!userData.email) setEmailError("Email required!");
    else if (!/\S+@\S+\.\S+/.test(userData.email))
      setEmailError("Email address is invalid!");
    else setEmailError("");

    if (userData.fullname.length < 3) setFullnameError("Enter your full name!");
    else setFullnameError("");

    if (userData.createPass.length <= 6) setCreatePassError("Weak password!");
    else setCreatePassError("");

    if (userData.confirmPass.length <= 6)
      setConfirmPassError("Re-enter your password!");
    else if (userData.createPass !== userData.confirmPass)
      setConfirmPassError("Passwords did not match!");
    else setConfirmPassError("");

    if (
      !emailError &&
      !fullnameError &&
      !createPassError &&
      !confirmPassError
    ) {
      const response = await fetch(`${baseUrl}/auth/register`, {
        method: "POST",
        body: JSON.stringify({
          email: userData.email,
          fullname: userData.fullname,
          password: userData.confirmPass,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data, "data");
      if (data.token) setPopup(true);
      //console.log(data,"data")
    }
  }
}

const handleGoogleLogin = async () => {
  const response = await fetch(`${baseUrl}/auth/google/url`);

  const data = await response.json();

  console.log(data);
  window.location.replace(data.url);
};

return (
  <>
    <div className="container-fluid loginPage">
      <div className="row">
        <div className="loginPage-left col-lg-6 col-sm-6">
          <div className="register-here mb-2">
            Already an User?
            <Link to="/login"> Login Now</Link>
          </div>
          <p>
            Join us and stay tuned to all <br /> the updates and notifications!
          </p>
          <img src={LoginGirl} alt="LoginGirl" />
        </div>
        <div className="loginPage-right col-lg-6 col-sm-6">
          <div className="form">
            <div className="form-heading my-2">
              <h2>Register Now</h2>
              <p>Welcome onboard with us!</p>
            </div>
            <form>
              <label htmlFor="email">
                E-mail
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your e-mail"
                  autoComplete="off"
                />
                {emailError.length > 0 ? (
                  <div className="error_message">{emailError}</div>
                ) : (
                  ""
                )}
              </label>

              <label htmlFor="fullname">
                Your Name
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={userData.fullname}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  autoComplete="off"
                />
                {fullnameError.length > 0 ? (
                  <div className="error_message">{fullnameError}</div>
                ) : (
                  ""
                )}
              </label>

              <label htmlFor="createPass">
                Create Password
                <input
                  type="password"
                  name="createPass"
                  id="createPass"
                  value={userData.createPass}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  placeholder="Create your password"
                />
                {createPassError.length > 0 ? (
                  <div className="error_message">{createPassError}</div>
                ) : (
                  ""
                )}
              </label>

              <label htmlFor="confirmPass">
                Confirm Password
                <input
                  type="password"
                  name="confirmPass"
                  id="confirmPass"
                  value={userData.confirmPass}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  placeholder="Confirm your password"
                />
                {confirmPassError.length > 0 ? (
                  <div className="error_message">{confirmPassError}</div>
                ) : (
                  ""
                )}
              </label>

              <br />

              <div
                className="dislodged-border"
                onClick={(e) => {
                  setPopup(true);
                  handleSubmit(e);
                }}
              >
                Signup
              </div>

              <div className="with-google my-4">
                <Link to="/" style={{ textDecoration: "none" }}>
                  Continue with <img src={google} className="mx-1" alt="" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {popup && (
      <OtpPopup trigger={popup} userData={userData} setTrigger={setPopup} />
    )}
  </>
);
