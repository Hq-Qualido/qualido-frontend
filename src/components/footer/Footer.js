import React, { useState } from "react";
import "./Footer.css";
import footerLogo from "../../assets/footerLogo.png";
import {FaInstagram,FaLinkedin,FaTwitter} from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { RiFilePaper2Line } from "react-icons/ri";
import { BsQuestionCircle } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlinePrivacyTip, MdOutlineCopyright } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  const handleScroll=()=>{
    window.scrollTo(0,0);
    }

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
          <div className="footer-logo">
            <Link to="/" onClick={handleScroll}>
              <img src={footerLogo} alt="footerLogo"  />
            </Link>
          </div>
          <div className="footer-services">
            <ul>
              <li>
                 
                 <span className="mx-2" >
                   
                  <FiMail />   
                </span> 
                  info.qualido21@gmail.com
              </li>
              <li>
                 
                 <span className="mx-2" >
                   
                  <BsQuestionCircle />  
                </span>  
                 FAQs
              </li>
              <li>
                 
                 <span className="mx-2" >
                   
                  <FiPhoneCall /> 
                </span> 
                +91 70425 23617
              </li>
              <li>
                 
                 <span className="mx-2" >
                   
                  <HiOutlineLocationMarker /> 
                </span> 
                Location
              </li>
              <li>
               
               <span className="mx-2" >
                 
                <RiFilePaper2Line /> 
              </span> 
              Terms & Conditions
            </li>
            <li>
               <span className="mx-2" >
                <MdOutlinePrivacyTip /> 
              </span> 
              <a href="/privacy-policy" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
                Privacy Policy
              </a>
            </li>
            </ul>
          </div>
        </div>
        <hr />

        <div className="footer-bottom">
          
        <ul className="terms">
            <li>
              <span className="mx-2" >
              <MdOutlineCopyright /> 
             </span>
              Qualido.in - 2022
            </li>
          </ul>
          
          <div className="social-icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/qualido.in?igshid=YmMyMTA2M2Y="
              className="footer-icon"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/qialido/"
              className="footer-icon"
            >
               
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/qualido21?t=GzrZfQrBhE1bJGcGoXJVgw&s=08"
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
