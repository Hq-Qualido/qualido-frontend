import React from 'react'
import { useState,useEffect } from "react";

export default function ProductSidebar(props) {
  const [active , setActive]=useState('');
  const [prodCategory , setProdCategory]=useState([]);
  
  const fetchCategories = async () => {
    const urlCat ="api.qualido.in/api/categories";
  const catResponse = await fetch(urlCat)
  const catList = await catResponse.json()
  setProdCategory(catList.categories)
}
  useEffect(()=>{
  fetchCategories();    
  window.scrollTo(0,0);
},[active])
  
    const handleCategory =(e)=>{
      setActive(e.target.id);
      props.returnCategory(e.target.id)
    }
  
    const dummyCategories = [
      "Comics",
      "Academics",
      "Competitive",
      "Fantasy",
      "LifestyleNutrition",
      "SelfHelp",
      "Motivation",
      "ScienceFiction",
      "Mystery",
      "Thriller",
      "History",
      "PoetryProse",
      "Spiritual",
      "Fiction",
      "LoveRomance",
      "Biography",
      "YoungAdults",
    ]
  return (
    <>
            <div className="sidebar-body">
            <ul className="sidebar-ul">
            {prodCategory.length>0 ? (

              prodCategory?.map((c)=>{
                return ( <li key={c._id} className={`sidebar-li ${c.name===active?"active":""}`} id={c.name} onClick={(e)=>{
                  handleCategory(e);
                  }} > {c.name} </li>)
              })
            ): (
              dummyCategories.map((d)=>{
                return ( <li key={d} className={`sidebar-li ${d===active?"active":""}`} id={d} onClick={(e)=>{
                  handleCategory(e);
                  }} > {d} </li>)
              })
            )
            }
         </ul>
        </div>
    </>
  )
}
