import React from 'react'
import { FaTimes } from 'react-icons/fa' 

export default function OtpPopup(props) {

  return (props.trigger &&
    <div className='popupPage '>
    <div className="popup">
    <div className="close" onClick={()=>props.setTrigger(false)}>
        <FaTimes />
    </div>
        <h1 className="user-email my-3">
            Hi! 👋, <span> {props.userMail}
            </span> 
        </h1>  
        <p>We've sent an OTP to the above provided mail , please enter the OTP to verify your mail.
        </p>  
        <div className="otp">
            <input 
            type="number" 
    placeholder=''
            />
        </div>

    </div>
    </div>
  )
}
