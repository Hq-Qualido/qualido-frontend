import React from "react";
import { useState,useEffect } from "react";
import { FaStar, FaStarHalf, FaArrowLeft, FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Footer from "../footer/Footer";
import { useParams } from 'react-router-dom';
import { useLocation } from "react-router";


export default function ProductId() {
  let { productId } = useParams();
  const location = useLocation();

  const [indivProd , setIndivProd] = useState([]);
  const [sameProds , setSameProds] = useState([]);
  const [category , setCategory] = useState('');

  const fetchProductData = async () => {
    const url1="https://qualido.herokuapp.com/api/products"
    const response1 = await fetch(url1)
    const data1 = await response1.json()

    data1.products.forEach((prodData)=>{
      if(prodData._id === productId){
        setIndivProd(prodData)
        setCategory(prodData.category)
      }
    })
  }

  const fetchSimiliarProducts = async () => {
    const url2=`https://qualido.herokuapp.com/api/products?category=${category}`
    const response2 = await fetch(url2)
    const data2 = await response2.json()
    setSameProds(data2.products)
    
  }

  useEffect(()=>{
    fetchProductData();  
    fetchSimiliarProducts(); 
    window.scrollTo(0, 0);
  },[productId,location]);

  return (
    <>
      <div className="container my-5">
        <div className="back-btn mb-4">
          <Link to="/products">
            <FaArrowLeft /> All Products{" "}
          </Link>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-6 productID-left">
          { indivProd.url?(
            <img src={indivProd.url} alt="BookImage" />
          ):
         ( <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_ctopYC.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop autoplay></lottie-player>)
          }
          </div>
          <div className="col-lg-6 col-sm-6 productID-right">
            <h1 className="my-2">
              {indivProd.prodName} <span style={{fontSize:"25px" , color:"grey"}}> by </span> {indivProd.authorName}
            </h1>


        <div className="tags">
        {indivProd.tags?.map((t)=>{
            return (<p key={t} className="mx-1"> #{ t } </p>)
          })}
        </div>  
            
            <div className="ratings-reviews mb-3">
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStarHalf color="orange" />
              <span>145 ratings</span>
            </div>
            <div className={indivProd.inStock?"In-Stock":"Currently-Unavailable"}>{indivProd.inStock?"In Stock":"Currently Unavailable"}</div>
            <h4 className="product-price my-3">Rs {indivProd.prodMrp} <span style={{textDecoration:"line-through" , color:"grey" , fontSize:"18px "}}>{indivProd.prodSp}</span></h4> 
            <div  className="save-percentage">
                Save {indivProd.discount}% 

            </div>
            <div className="product-buttons my-4">
              <div className="cart-btn mx-1">  Add to Cart</div>
              <div className="buy-btn mx-1">  <FaRupeeSign /> Buy Now </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="book-lines text-center">
          {indivProd.description}
        </p>
      </div>

      <div className="container my-5">
        <h3 className="text-center">About the product </h3>
        <ul className="product-description my-4">
          <li>Publishers Data</li>
          <li>Language Availability</li>
          <li>Item Weight </li>
          <li>Dimensions </li>
          <li>Dimensions </li>
          <li>Dimensions </li>
        </ul>
      </div>

      {/* SIMILIAR PRODUCT LIST STARTS */}

      <div className="products-list container-fluid">
        <h3 className="text-center">View Similiar products...</h3>
        <div className="products-list-body">

        {sameProds.slice(0,4)?.map((p)=>{
          return (
            <ProductCard
              key={p._id}
              {...p}
              id="62c6e23f7bf811b8bbc1a309"
              navigator={true}
          />
          )
        })}
        
        </div>
      </div>
      {/* SIMILIAR PRODUCT LIST ENDS */}
      <Footer />
    </>
  );
}

