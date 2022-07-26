import React from "react";
import {FaBoxOpen ,FaUserLock } from 'react-icons/fa'
import { TiLocation } from "react-icons/ti";

export default function DashCards(props) {
  return (
    <>

      <div className="col-lg-4 col-sm-6 dashCards my-2">
        <h3 className="my-3">
       <span className="mx-2"> 
         {props.image==="FaBoxOpen"?  <FaBoxOpen />  :"" }
         {props.image==="FaUserLock"?  <FaUserLock />  :"" }
         {props.image==="TiLocation"?  <TiLocation />  :"" }
        </span> 
        {props.title}
        </h3>
        <p className="text-center">
          {props.description}
        </p>
      </div>
    </>
  );
}
