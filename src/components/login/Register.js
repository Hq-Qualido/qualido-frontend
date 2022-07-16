import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
// import Footer from '../footer/Footer'

import LoginGirl from '../../assets/loginGirl.png'
import google from '../../assets/google.png'

export default function Register() {
    const [userData,setUserData] = useState({
        email:"",
        username:"",
        createPass:"",
        confirmPass:"",
    })

    const handleChange =(e)=>{
        const {name,value} = e.target;
        setUserData({
            ...userData,
            [name]:value,
        })
    }
    const handleSubmit=()=>{
        console.log(userData)
    }

  return (
    <>
    <div className="container-fluid loginPage">
        <div className="row">
            <div className="loginPage-left col-lg-6 col-sm-6">
            <div className="register-here mb-2">Already an User? 
            <Link to="/login"> Login Now</Link>
             </div>
            <p>Join us and stay tuned to all <br />  the updates and notifications!</p>
                <img src={LoginGirl} alt="LoginGirl" />
            </div>
            <div className="loginPage-right col-lg-6 col-sm-6">
                <div className="form">
                <div className='form-heading my-2'>
                <h2>Register Now</h2> 
                <p>Welcome onboard with us!</p>
                </div>
                    <form >
                    
                    <label htmlFor="email">E-mail
                    <input 
                        type="email" 
                        name="email"
                        id="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                        placeholder='Enter your e-mail'
                        autoComplete='off'
                        /> 
                        </label>
                    <label htmlFor="username">Username
                    <input 
                        type="text" 
                        name="username"
                        id="username"
                        value={userData.username}
                        onChange={handleChange}
                        required
                        placeholder='Enter your username'
                        autoComplete='off'
                        /> 
                        </label>
                    <label htmlFor="createPass">Create Password
                    <input 
                        type="password" 
                        name="createPass"
                        id="createPass"
                        value={userData.createPass}
                        onChange={handleChange}
                        required
                        autoComplete='off'
                        placeholder='Create your password'
                        />
                    </label>
                     
                    <label htmlFor="confPass">Confirm Password
                    <input 
                        type="password" 
                        name="confPass"
                        id="confPass"
                        value={userData.confirmPass}
                        onChange={handleChange}
                        required
                        autoComplete='off'
                        placeholder='Confirm your password'
                        />
                    </label>
                     
                            <br />
                        <div onClick={handleSubmit} className="dislodged-border">Signup</div>

                        <div className="with-google my-4">
                       <Link to="/" style={{textDecoration:"none"}}>
                            Continue with <img src={google} className="mx-1" alt="" />
                       </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* <Footer /> */}
    </>
  )
}
