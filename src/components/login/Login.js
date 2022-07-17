import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";
// import Footer from '../footer/Footer'

import LoginGirl from '../../assets/loginGirl.png'
import google from '../../assets/google.png'
import { useState } from 'react';

export default function Login() {
    const [values,setValues] = useState({
        email:"",
        password:"",
    })

    const handleChange =(e)=>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value,
        })
    }
    const handleSubmit=()=>{
        console.log(values)
    }

  return (
    <>
    <div className="container-fluid loginPage">
        <div className="row">
            <div className="loginPage-left col-lg-6 col-sm-6">
            <div className="register-here mb-2">New User? 
            <Link to="/signup"> Register Here</Link>
             </div>
            <p>Join us and stay tuned to all <br />  the updates and notifications!</p>
                <img src={LoginGirl} alt="LoginGirl" />
            </div>
            <div className="loginPage-right col-lg-6 col-sm-6">
                <div className="form">
                <div className='form-heading my-2'>
                <h2>Login</h2> 
                <p>Welcome onboard with us!</p>
                </div>

                    <form>
                    <label htmlFor="">E-mail
                    <input 
                        type="email" 
                        name="email"
                        id="email"
                        placeholder='Enter your e-mail'
                        value={values.email}
                        onChange={handleChange}
                        autoComplete='off'
                        required
                        /> 
                        </label>
                    <label htmlFor="">Password
                    <input 
                        type="password" 
                        name="password"
                        id="password"
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                        autoComplete='off'
                        required
                        />
                    </label>
                     
                            <br />
                        <div onClick={handleSubmit} className="dislodged-border">Login</div>


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