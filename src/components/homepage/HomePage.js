import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Homepage.css";
import Categories from "./Categories";
import CustomerReview from "./CustomerReview";
import WhyUS from "./WhyUS";
import Marquee from "react-fast-marquee";

import Illustration1 from "../../assets/Illustration1.svg";
import Illustration2 from "../../assets/Illustration2.svg";
import customerPic from "../../assets/customerPic.png";
import Privacy from "../../assets/Privacy.png";
import Service from "../../assets/Service.png";
import chatSupport from "../../assets/chatSupport.png";
import Footer from "../footer/Footer";
import Loader from "../loader/Loader";
import { baseUrl } from "../../BaseUrl";
import { FaArrowRight, FaSearch, FaWhatsapp } from "react-icons/fa";
import UpcomingProducts from "./UpcomingProducts";
import reviews from "./Reviews";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [allCategories, setAllCategories] = useState([]);

  const fetchCategories = async () => {
    const categs = `${baseUrl}/categories`;
    const catResponse = await fetch(categs);
    const catList = await catResponse.json();
    setAllCategories(catList.categories);
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const customers = {
    pauseOnHover: true,
    autoplay: true,
    speed: 100,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="container my-3">
        <Slider {...settings}>
          {/* STARTS HERE 1ST  */}
          <div className="container-fluid slider">
            <div className="row slider-row">
              <div className="col-lg-6 col-sm-6 slider-left">
                <div className="slider-heading fs-1">Grab The Best</div>
                <div className="slider-heading fs-1">Deals Here!</div>
                <p className="slider-para">
                  Now get all the books you have always wanted to read at much
                  cheaper prices than anywhere else.
                </p>

                <Link
                  to="/products"
                  className="home_search_box"
                  style={{ textDecoration: "none" }}
                >
                  <div className="text-secondary px-2">View Products</div>
                  <button className="main_search_btn text-secondary">
                    <FaArrowRight />
                  </button>
                </Link>
              </div>
              <div className="col-lg-6 col-sm-6 slider-right">
                <img
                  className="slider-right-image"
                  src={Illustration1}
                  alt="Illustration1"
                />
              </div>
            </div>
          </div>
          {/* ENDS HERE !ST  */}

          {/* STARTS HERE 2nd  */}
          <div className="container-fluid slider">
            <div className="row slider-row">
              <div className="col-lg-6 col-sm-6 slider-left">
                <div className="slider-heading fs-1">Latest arrivals</div>
                <div className="slider-heading fs-1">Are Now Here!</div>
                <p className="slider-para">
                  We have brought you the latest most trendy books better and
                  before than anyone else.
                </p>

                <Link
                  to="/products"
                  className="home_search_box"
                  style={{ textDecoration: "none" }}
                >
                  <div className="text-secondary px-2">View Products</div>
                  <button className="main_search_btn text-secondary">
                    <FaArrowRight />
                  </button>
                </Link>
              </div>
              <div className="col-lg-6 col-sm-6 slider-right">
                <img
                  className="slider-right-image"
                  src={Illustration2}
                  alt="Illustration2"
                />
              </div>
            </div>
          </div>
          {/* ENDS HERE 2nd */}
        </Slider>
      </div>

      {/* ALL CATEGORIES LIST STARTS  */}
      <div className="container-fluid categories my-5">
        <div className="text-center mb-5 fs-2">Categories</div>
        <div className="row categories-body">
          {allCategories.length > 0 ? (
            allCategories?.map((item) => {
              return <Categories key={item._id} {...item} />;
            })
          ) : (
            <Loader type="dots" />
          )}
        </div>
      </div>

      {/* ALL CATEGORIES LIST ENDS  */}

      <div className="container" style={{ width: "80%" }}>
        <div className="text-center mb-5 fs-2">Upcoming Products</div>
        <UpcomingProducts />
      </div>

      {/* CUSTOMER REVIEWS STARTS */}
      <div className="container-fluid customer-reviews">
        <div className="row customer-reviews-row">
          <div className="text-center fs-2">Customer Reviews</div>

          <Marquee {...customers}>
            {reviews.map((item, index) => {
              return (
                <div key={index}>
                  <CustomerReview
                    review={item.review}
                    image={customerPic}
                    name={item.name}
                    location={item.location}
                    rating={item.rating}
                    classOfCard={
                      (index + 1) % 2 === 0
                        ? "customerReview-card1"
                        : "customerReview-card2"
                    }
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
      {/* CUSTOMER REVIEWS ENDS */}

      {/* WHY CHOOSE US StARTS */}
      <div className="container my-5">
        <div className="text-center mb-5 fs-2">Why Choose Us?</div>
        <div className="row">
          <WhyUS
            image={Service}
            title="Service"
            description="Door to door fast delivery service is available with us to give you the best of your experience."
          />
          <WhyUS
            image={Privacy}
            title="Privacy"
            description="All transactions are 100% secure and as fast as super jet. Pay with card , Upi or any way you want."
          />
          <WhyUS
            image={chatSupport}
            title="Chat Support"
            description="We're live 24*7 for any queries and complaints of yours , feel free to contact us anytime."
          />
        </div>
      </div>
      {/* WHY CHOOSE US ENDS */}
      {/* 
      <a
        href="https://forms.gle/v3AzAVY2Wx4Spdr26"
        target="_blank"
        rel="noreferrer"
        className="apply_form fs-6 shadow"
      >
        <FaInfo /> We're hiring
      </a> */}

      <a
        href="https://wa.me/+917042523617?text=I%20want%20to%20buy%20a%20book."
        target="_blank"
        rel="noreferrer"
        className="whatsapp_link fs-3"
      >
        <FaWhatsapp />
      </a>
      <Footer />
    </>
  );
}
