import React from 'react'
import { useState,useEffect } from "react";

export default function ProductSidebar(props) {
  const [active , setActive]=useState('');
  const [prodCategory , setProdCategory]=useState([]);
  
  const fetchCategories = async () => {
    const urlCat ="https://qualido.herokuapp.com/api/categories";
  const catResponse = await fetch(urlCat)
  const catList = await catResponse.json()
  setProdCategory(catList.categories)
}
  useEffect(()=>{
  fetchCategories();    
},[])
  
    const handleCategory =(e)=>{
      setActive(e.target.id);
      props.returnCategory(e.target.id)
    }
  
  return (
    <>
            <div className="sidebar-body">
            <ul className="sidebar-ul">
            {
              prodCategory?.map((c)=>{
                return ( <li key={c._id} className={`sidebar-li ${c.name===active?"active":""}`} id={c.name} onClick={(e)=>{
                  handleCategory(e);
                  }} > {c.name} </li>)
              })
            }
         </ul>
        </div>
    </>
  )
}
