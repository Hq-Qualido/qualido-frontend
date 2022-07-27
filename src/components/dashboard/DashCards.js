import React from "react";
import {FaBoxOpen ,FaUserLock,FaGift } from 'react-icons/fa'
import { TiLocation } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function DashCards(props) {
  return (
    <>

  <Link to={`${props.url}`}>
      <div className="col-lg-4 col-sm-6 dashCards my-2">
        <h3 className="my-3">
       <span className="mx-2"> 
         {props.image==="FaBoxOpen"?  <FaBoxOpen />  :"" }
         {props.image==="FaGift"?  <FaGift />  :"" }
         {props.image==="FaUserLock"?  <FaUserLock />  :"" }
         {props.image==="TiLocation"?  <TiLocation />  :"" }
        </span> 
        {props.title}
        </h3>
        <p className="text-center">
          {props.description}
        </p>
      </div>
  </Link>
    </>
  );
}
