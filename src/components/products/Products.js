import React from "react";
import { useState,useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import ProductCard from "./ProductCard";
import "./Products.css";
import ProductSidebar from "./ProductSidebar";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [datas,setDatas] = useState([]);
  const fetchProducts = async (val) => {
    const url=!val?"https://qualido.herokuapp.com/api/products" : `https://qualido.herokuapp.com/api/products?category=${val}`
    setLoading(true);
    const response = await fetch(url)
    const data = await response.json()
    setDatas(data.products)
    setLoading(false);
  }

  useEffect(()=>{
    fetchProducts();    
  },[])

  const handleScroll=()=>{
    window.scrollTo(0,0);
    }

    
  return (
    <>
      <Outlet />

      <div className="products-page">
        {/* SIDEBAR STARTS  */}
        <div className="products-sidebar">
          <ProductSidebar returnCategory={fetchProducts} />
        </div>
        {/* SIDEBAR ENDS  */}


        {/* PRODUCT LIST STARTS */}
  
        <div className="products-list container-fluid">
          <div className="products-list-body">
       {!loading ? datas.map((items)=>{
      return ( 
        <>
        <ProductCard
              key={items._id}
              {...items}
              navigator={false}
            />
        </>
      )
    })
    : (
      <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_ctopYC.json"  background="transparent"  speed="1"  style={{width: "200px", height: "200px"}}  loop autoplay></lottie-player>
)
    }

          </div>
          <Footer />
        </div>
        {/* PRODUCT LIST ENDS */}
      </div>

      <div className="scroll-top" onClick={handleScroll}><FaArrowAltCircleUp color="#00899B" />  </div>
      
    </>
  );
}
