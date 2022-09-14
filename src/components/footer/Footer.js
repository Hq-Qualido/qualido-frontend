import React ,{useState} from 'react'
import './Footer.css';
import footerLogo from '../../assets/footerLogo.png'
import {FaFacebookSquare , FaInstagramSquare , FaLinkedin ,FaTwitter } from "react-icons/fa";
import { FiMail ,FiPhoneCall } from "react-icons/fi";
import { BsQuestionCircle  } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
    <div className="footer">
    <div className='subscribe_section'>
    <div className='subscribe_heading text-center'>Let's keep in touch!</div>
    <p className=' text-center'>Stay tuned to our latest products and deals! </p>
      <div className="subscribe_form">
        <input type="email" className='subscribe_now' placeholder='Enter your e-mail ' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <button className='subscribe_btn' onClick={handleSubmit}>Subscribe</button>
      </div>

    </div>
    <hr className='hr'/>


        <div className="footer-body">
            <div className="footer-logo">
               <Link to="/">
                <img src={footerLogo} alt="footerLogo" />
               </Link>

            </div>
            <div className="footer-services">
                <ul>
                    <li> <span> <FiMail /> </span> info.qualido21@gmail.com</li>
                    <li> <span> <BsQuestionCircle /> </span> FAQs</li>
                    <li> <span> <FiPhoneCall /> </span> +91 8989898989</li>
                    <li> <span> <MdLocationPin /> </span> Location</li>
                </ul>
            </div>

        </div>
    <hr />

        <div className="footer-bottom">
            <div className="footer-tnc">Terms & Conditions</div>
            <div className="privacyPolicy">Privacy Policy</div>
            <div className="social-icons">
           <a target="_blank" rel="noreferrer" href="https://facebook.com" className='footer-icon'> <FaFacebookSquare /></a>
           <a target="_blank" rel="noreferrer" href="https://instagram.com/qualido.in?igshid=YmMyMTA2M2Y=" className='footer-icon'> <FaInstagramSquare /></a>
           <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/qialido/" className='footer-icon'> <FaLinkedin /></a>
           <a target="_blank" rel="noreferrer" href="https://twitter.com/qualido21?t=GzrZfQrBhE1bJGcGoXJVgw&s=08" className='footer-icon'> <FaTwitter /></a>
            </div>
        </div>


    </div>
    </>
  )
}
