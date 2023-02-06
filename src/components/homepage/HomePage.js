import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Homepage.css";
import Categories from "./Categories";
import CustomerReview from "./CustomerReview";
import WhyUS from "./WhyUS";
import { Link } from "react-router-dom";

import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import customerPic from "../../assets/customerPic.png";
import Privacy from "../../assets/Privacy.png";
import Service from "../../assets/Service.png";
import chatSupport from "../../assets/chatSupport.png";
import Footer from "../footer/Footer";
import Loader from "../loader/Loader";
import { baseUrl } from "../../BaseUrl";
import { FaWhatsapp } from "react-icons/fa";
import UpcomingProducts from "./UpcomingProducts";

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
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {/* STARTS HERE 1ST  */}
        <div className="container-fluid slider">
          <div className="row slider-row">
            <div className="col-lg-6 col-sm-6 slider-left">
              <div className="slider-heading slideLeft-text fs-0">
                Grab The Best
              </div>
              <div className="slider-heading slideRight-text fs-0 ">
                Deals Here!
              </div>
              <p className="slider-para">
                Now get all the books you have always wanted to read at much
                cheaper prices than anywhere else.
              </p>
              <Link to="/products" className="button-52">
                Shop Now
              </Link>
            </div>
            <div className="col-lg-6 col-sm-6 slider-right">
              <img className="slider-right-image" src={s1} alt="" />
            </div>
          </div>
        </div>
        {/* ENDS HERE !ST  */}

        {/* STARTS HERE 2nd  */}
        <div className="container-fluid slider">
          <div className="row slider-row">
            <div className="col-lg-6 col-sm-6 slider-left">
              <div className="slider-heading slideLeft-text fs-0">
                Latest arrivals
              </div>
              <div className="slider-heading slideRight-text fs-0 ">
                Are Now Here!
              </div>
              <p className="slider-para">
                We have brought you the latest most trendy books better and
                before than anyone else.
              </p>
              <Link to="/products" className="button-52">
                Shop Now
              </Link>
            </div>
            <div className="col-lg-6 col-sm-6 slider-right">
              <img className="slider-right-image" src={s2} alt="" />
            </div>
          </div>
        </div>
        {/* ENDS HERE 2nd */}

        {/* STARTS HERE 3rd  */}
        <div className="container-fluid slider">
          <div className="row slider-row">
            <div className="col-lg-6 col-sm-6 slider-left">
              <div className="slider-heading slideLeft-text fs-0">
                Now Library at
              </div>
              <div className="slider-heading slideRight-text fs-0 ">
                your home!
              </div>
              <p className="slider-para">
                No need to leave your comfort , we'll deliver all your books to
                your home at very minimal prices.
              </p>
              <Link to="/products" className="button-52">
                Shop Now
              </Link>
            </div>
            <div className="col-lg-6 col-sm-6 slider-right">
              <img className="slider-right-image" src={s3} alt="" />
            </div>
          </div>
        </div>
        {/* ENDS HERE 3rd */}
      </Slider>

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
          <div className="text-center mb-5 fs-2">Customer Reviews</div>

          <Slider {...customers}>
            <CustomerReview
              review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus dignissimos nostrum possimus, omnis, officiis ullam repellendus dolorem temporibus, illum in modi accusantium"
              image={customerPic}
              name="Elon Musk"
              classOfCard="customerReview-card1"
            />
            <CustomerReview
              review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus dignissimos nostrum possimus, omnis, officiis ullam repellendus dolorem temporibus, illum in modi accusantium"
              image={customerPic}
              name="Elon Musk"
              classOfCard="customerReview-card2"
            />
            <CustomerReview
              review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus dignissimos nostrum possimus, omnis, officiis ullam repellendus dolorem temporibus, illum in modi accusantium"
              image={customerPic}
              name="Elon Musk"
              classOfCard="customerReview-card1"
            />
            <CustomerReview
              review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus dignissimos nostrum possimus, omnis, officiis ullam repellendus dolorem temporibus, illum in modi accusantium"
              image={customerPic}
              name="Elon Musk"
              classOfCard="customerReview-card2"
            />
            <CustomerReview
              review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus dignissimos nostrum possimus, omnis, officiis ullam repellendus dolorem temporibus, illum in modi accusantium"
              image={customerPic}
              name="Elon Musk"
              classOfCard="customerReview-card1"
            />
            <CustomerReview
              review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus dignissimos nostrum possimus, omnis, officiis ullam repellendus dolorem temporibus, illum in modi accusantium"
              image={customerPic}
              name="Elon Musk"
              classOfCard="customerReview-card2"
            />
          </Slider>
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

      <a
       href="https://forms.gle/v3AzAVY2Wx4Spdr26"
       target="_blank"
       rel="noreferrer"
       className="apply_form fs-5 shadow"
       >
        Join Us &rarr;
      </a>

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
