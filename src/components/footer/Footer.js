import React, { useState } from "react";
import "./Footer.css";
import footerLogo from "../../assets/footerLogo.png";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { RiFilePaper2Line } from "react-icons/ri";
import { BsQuestionCircle } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="footer">
        <div className="subscribe_section">
          <div className="subscribe_heading text-center">
            Let's keep in touch!
          </div>
          <p className=" text-center">
            Stay tuned to our latest products and deals!
          </p>
          <div className="subscribe_form">
            <input
              type="email"
              className="subscribe_now"
              placeholder="Enter your e-mail "
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button className="subscribe_btn" onClick={handleSubmit}>
              Subscribe
            </button>
          </div>
        </div>
        <hr className="hr" />

        <div className="footer-body">
          <div className="footer-logo my-4">
            <Link to="/" onClick={handleScroll}>
              <img src={footerLogo} alt="footerLogo" />
            </Link>
          </div>
          <div className="footer-services">
            <ul>
              <li>
                <span className="mx-2">
                  <FiMail />
                </span>
                <a
                  href="mailto:info.qualido21@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  info.qualido21@gmail.com
                </a>
              </li>
              <li>
                <span className="mx-2">
                  <BsQuestionCircle />
                </span>
                <a href="/" target="_blank" rel="noreferrer">
                  FAQs
                </a>
              </li>

              <li>
                <span className="mx-2">
                  <BsQuestionCircle />
                </span>
                <a href="/support" target="_blank" rel="noreferrer">
                  Help & Support
                </a>
              </li>

              <li>
                <span className="mx-2">
                  <BsQuestionCircle />
                </span>
                <a href="/refund-policy" target="_blank" rel="noreferrer">
                  Refund Policy
                </a>
              </li>
              <li>
                <span className="mx-2">
                  <RiFilePaper2Line />
                </span>
                <a href="/tnc" target="_blank" rel="noreferrer">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <span className="mx-2">
                  <MdOutlinePrivacyTip />
                </span>
                <a href="/privacy-policy" target="_blank" rel="noreferrer">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />

        <div className="footer-bottom">
          <ul className="terms order-2 order-sm-1">
            <div className="p-2 text-left">
              &copy; Qualido.in - 2022 <br /> New Delhi, +91 70425 23617
            </div>
          </ul>

          <div className="social-icons order-1 order-sm-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/qualido.in/"
              className="footer-icon"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/qualido-hq/"
              className="footer-icon"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/qualido21"
              className="footer-icon"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
