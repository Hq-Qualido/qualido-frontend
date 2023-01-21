import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../BaseUrl";

import LoginGirl from "../../assets/loginGirl.png";
import google from "../../assets/google.png";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [finalError, setFinalError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  async function handleSubmit() {
    if (!values.email) setEmailError("Email required!");
    else if (!/\S+@\S+\.\S+/.test(values.email))
      setEmailError("Email address is invalid!");
    else setEmailError("");

    if (!values.password) setPassError("Enter Password");
    else if (values.password.length < 6) setPassError("Wrong Password");
    else setPassError("");

    if (
      emailError.length <= 0 &&
      passError.length <= 0 &&
      values.email.length > 0 &&
      values.password.length > 0
    ) {
      setLoading(true);
      await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          setLoading(false);
          if (response.status === 200) {
            navigate("/dashboard");
            window.location.reload();
          } else if (response.status === 404)
            setFinalError("User not registered!");
          else if (response.status === 400) setFinalError("Wrong password!");
          return response.json();
        })
        .then((user) => {
          localStorage.setItem("Name", user.user.fullname);
        })
        .catch((error) => {
          console.log(error, "catch error hai bhai");
        });
    }
  }

  return (
    <>
      <div className="container-fluid loginPage">
        <div className="row">
          <div className="loginPage-left col-lg-6 col-sm-6">
            <div className="register-here mb-2">
              New User?
              <Link to="/signup"> Register Here</Link>
            </div>
            <p>
              Join us and stay tuned to all <br /> the updates and
              notifications!
            </p>
            <img src={LoginGirl} alt="LoginGirl" />
          </div>
          <div className="loginPage-right col-lg-6 col-sm-6">
            <div className="form">
              <div className="form-heading my-2">
                <h2>Login</h2>
                <p>Welcome onboard with us!</p>
              </div>

              <form>
                <label htmlFor="">
                  E-mail
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your e-mail"
                    value={values.email}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                  {emailError ? (
                    <div className="error_message">{emailError}</div>
                  ) : (
                    ""
                  )}
                </label>
                <label htmlFor="">
                  Password
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                  {passError.length > 0 ? (
                    <div className="error_message">{passError}</div>
                  ) : (
                    ""
                  )}
                </label>
                <br />
                {finalError.length > 0 ? (
                  <div className="error_message mx-auto mb-2">{finalError}</div>
                ) : (
                  ""
                )}
                <div onClick={handleSubmit} className="dislodged-border">
                  {!loading ? "Login" : "Wait..."}
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
    </>
  );
}
