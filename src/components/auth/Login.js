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
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  async function handleSubmit() {
    if (values.email.length < 3) {
      setError({ ...error, emailError: "Please Enter Valid Email!" });
    } else setError({ ...error, emailError: "" });

    if (error.emailError.length === 0) {
      setLoading(true);
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setLoading(false);
      //   console.log(data);
      if (data.token) {
        localStorage.setItem("Name", data.user.fullname);
        // console.log(localStorage);
        navigate("/dashboard");
        window.location.reload();
      } else {
        navigate("/signup");
      }
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
                  {error.emailError.length > 0 ? (
                    <div className="error_message">{error.emailError}</div>
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
                  {error.passwordError.length > 0 ? (
                    <div className="error_message">{error.passwordError}</div>
                  ) : (
                    ""
                  )}
                </label>
                <br />
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
