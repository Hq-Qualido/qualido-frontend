import React from 'react'
import './Footer.css';
import footerLogo from '../../assets/footerLogo.png'
import { FaPaperPlane ,FaFacebookSquare , FaInstagramSquare , FaLinkedin ,FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <div className="footer">

        <div className="footer-body">
            <div className="footer-logo">
               <Link to="/">
                <img src={footerLogo} alt="footerLogo" />
               </Link>

            </div>
            <div className="footer-services">
                <ul>
                    <li>Email</li>
                    <li>Reach us</li>
                    <li>Contacts</li>
                    <li>Location</li>
                </ul>
            </div>
            <div className="footer-email">
                <input type="email" placeholder='Subscribe Now'  style={{borderRadius:"0px"}}/>
                <button className="btn btn-primary" type="submit" style={{borderRadius:"0px" ,}}>
            <FaPaperPlane />
          </button>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-tnc">Terms & Conditions</div>
            <div className="privacyPolicy">Privacy Policy</div>
            <div className="social-icons">
           <a target="_blank" rel="noreferrer" href="facebook.com" className='footer-icon'> <FaFacebookSquare /></a>
           <a target="_blank" rel="noreferrer" href="https://instagram.com/qualido.in?igshid=YmMyMTA2M2Y=" className='footer-icon'> <FaInstagramSquare /></a>
           <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/qialido/" className='footer-icon'> <FaLinkedin /></a>
           <a target="_blank" rel="noreferrer" href="https://twitter.com/qualido21?t=GzrZfQrBhE1bJGcGoXJVgw&s=08" className='footer-icon'> <FaTwitter /></a>
            </div>
        </div>
    </div>
    </>
  )
}
