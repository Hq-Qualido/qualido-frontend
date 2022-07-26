import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
// import Footer from '../footer/Footer'
import {FaRegFrown} from 'react-icons/fa'

import LoginGirl from '../../assets/loginGirl.png'
import google from '../../assets/google.png'
import OtpPopup from './OtpPopup';

export default function Register() {
    const [popup,setPopup] = useState(false);
    const [errors,setErrors] = useState('');
    const [userData,setUserData] = useState({
        email:"",
        fullname:"",
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
    async function handleSubmit(){
        console.log(userData);
        if (!userData.email) {
            setErrors('Email required!');
          } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
            setErrors('Email address is invalid!');
          }else if (userData.fullname.length < 3) {
            setErrors('Enter your full name!');
          }else if( userData.createPass.length<=6){
            setErrors('Weak password!');
          }
        else if (userData.createPass !== userData.confirmPass){
            setErrors('Passwords did not match!');
        }
        else{
            setErrors('')
            console.log(userData.confirmPass)
        const response = await fetch(` https://qualido.herokuapp.com/api/auth/register`,
            {
                method: "POST",
                body: JSON.stringify({
                    email:userData.email ,
                    fullname:userData.fullname ,
                    password:userData.confirmPass ,
                }),
                headers: {
                            'Content-Type': 'application/json',
                           }
            })
            const data =await response.json();
                 console.log(data,"data")       
        }
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
                        className={errors.length>0? "error":""}
                        /> 
                        </label>


                    <label htmlFor="fullname">Your Name
                    <input 
                        type="text" 
                        name="fullname"
                        id="fullname"
                        value={userData.fullname}
                        onChange={handleChange}
                        required
                        placeholder='Enter your full name'
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
                     
                    <label htmlFor="confirmPass">Confirm Password
                    <input 
                        type="password" 
                        name="confirmPass"
                        id="confirmPass"
                        value={userData.confirmPass}
                        onChange={handleChange}
                        required
                        autoComplete='off'
                        placeholder='Confirm your password'
                        />
                    </label>
                     
                            <br />
                          { errors.length>0 &&  <div className="error-box "> <span className= 'mx-1'> <FaRegFrown /> 
                          </span>
                            { errors }
                          </div>
                           }


                                <div className="dislodged-border" 
                        onClick={(e)=>{
                            setPopup(true);
                            handleSubmit(e);
                            }}>
                            Signup
                            </div>

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
{ errors.length<=0 &&
    <OtpPopup trigger={popup} userData={userData} setTrigger={setPopup}/>}
    {/* <Footer /> */}
    </>
  )
}
