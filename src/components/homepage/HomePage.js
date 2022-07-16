import React from "react";
import Slider from "react-slick";
import "./Homepage.css";
import Categories from "./Categories";
import CustomerReview from "./CustomerReview";
import WhyUS from "./WhyUS";


import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import item1 from "../../assets/item1.png";
import academics from "../../assets/academics.png";
import Love from "../../assets/Love.png";
import romance from "../../assets/romance.png";
import selfHelp from "../../assets/selfHelp.png";
import motivation from "../../assets/motivation.png";
import fiction from "../../assets/fiction.png";
import customerPic from "../../assets/customerPic.png";
import Privacy from "../../assets/Privacy.png";
import Service from "../../assets/Service.png";
import chatSupport from "../../assets/chatSupport.png";
import Footer from "../footer/Footer";


export default function HomePage() {
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
    autoplay:true,
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
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  return (
    <>
      <Slider {...settings}>
        {/* STARTS HERE 1ST  */}
        <div className="container-fluid slider">
          <div className="row slider-row">
            <div className="col-lg-6 col-sm-6 slider-left">
              <h1 className="slider-heading slideLeft-text">Grab The Best </h1>
              <h1 className="slider-heading slideRight-text">Deals Here! </h1>
              <p className="slider-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                aliquid iste cum voluptates nihil commodi quidem sapiente omnis
                delectus ea.
              </p>
              <button className="button-52">Shop Now</button>
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
              <h1 className="slider-heading slideLeft-text">
                 Latest arrivals
              </h1>
              <h1 className="slider-heading slideRight-text">Are Now Here! </h1>
              <p className="slider-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                aliquid iste cum voluptates nihil commodi quidem sapiente omnis
                delectus ea.
              </p>
              <button className="button-52">Shop Now</button>
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
              <h1 className="slider-heading slideLeft-text">Now Library at </h1>
              <h1 className="slider-heading slideRight-text">your home! </h1>
              <p className="slider-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                aliquid iste cum voluptates nihil commodi quidem sapiente omnis
                delectus ea.
              </p>
              <button className="button-52">Shop Now</button>
            </div>
            <div className="col-lg-6 col-sm-6 slider-right">
              <img className="slider-right-image" src={s3} alt="" />
            </div>
          </div>
        </div>
        {/* ENDS HERE 3rd */}
      </Slider>

      {/* THE TOP PICKS STARTS HERE  */}
      {/* <div className="container-fluid top-picks my-5">
        <h1 className="text-center section-heading my-5 ">The Top Picks</h1>
        <div className="row top-picks-row">
          <div className="col-lg-2 col-sm-3 mx-1 best-products">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            error accusantium labore. Recusandae delectus quidem rerum.
            Dignissimos aliquam deleniti quae.
          </div>
          <div className="col-lg-2 col-sm-3 mx-1 best-products">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            error accusantium labore. Recusandae delectus quidem rerum.
            Dignissimos aliquam deleniti quae.
          </div>
          <div className="col-lg-2 col-sm-3 mx-1 best-products">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            error accusantium labore. Recusandae delectus quidem rerum.
            Dignissimos aliquam deleniti quae.
          </div>
          <div className="col-lg-2 col-sm-3 mx-1 best-products">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            error accusantium labore. Recusandae delectus quidem rerum.
            Dignissimos aliquam deleniti quae.
          </div>
          <div className="col-lg-2 col-sm-3 mx-1 best-products">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            error accusantium labore. Recusandae delectus quidem rerum.
            Dignissimos aliquam deleniti quae.
          </div>
        </div>
      </div> */}
      {/* THE TOP PICKS ENDS HERE  */}



      {/* ALL CATEGORIES LIST STARTS  */}
      <div className="container-fluid categories my-5">
      <h1 className="text-center section-heading mb-5 ">Categories</h1>
    <div className="row categories-body">

    <Categories url="/products" image={academics} title="Academics" />
    <Categories url="/products" image={academics} title="Competitive" />
    <Categories url="/products" image={Love} title="Love" />
    <Categories url="/products" image={romance} title="Romance" />
    <Categories url="/products" image={selfHelp} title="Self Help" />
    <Categories url="/products" image={motivation} title="Motivation" />
    <Categories url="/products" image={fiction} title="Fiction" />
    <Categories url="/products" image={Love} title="Science" />
    <Categories url="/products" image={item1} title="Mistory" />
    <Categories url="/products" image={romance} title="Thriller" />
    <Categories url="/products" image={fiction} title="History" />
    <Categories url="/products" image={motivation} title="Prose" />
    <Categories url="/products" image={selfHelp} title="Poetry" />
    <Categories url="/products" image={item1} title="Spiritual" />
    <Categories url="/products" image={romance} title="Biography" />
    <Categories url="/products" image={academics} title="Comics" />
    <Categories url="/products" image={motivation} title="Adult" />
</div>
</div>

      {/* ALL CATEGORIES LIST ENDS  */}


      {/* CUSTOMER REVIEWS STARTS */}
      <div className="container-fluid customer-reviews">
        <div className="row customer-reviews-row">
      <h1 className="text-center section-heading mb-5 ">Customer Reviews</h1>

        <Slider {...customers}>

        <CustomerReview  review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus dignissimos nostrum possimus, omnis, officiis ullam repellendus dolorem temporibus, illum in modi accusantium" image={customerPic} name="Elon Musk" classOfCard="customerReview-card1" />
        <CustomerReview  review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus dignissimos nostrum possimus, omnis, officiis ullam repellendus dolorem temporibus, illum in modi accusantium" image={customerPic} name="Elon Musk" classOfCard="customerReview-card2" />
        <CustomerReview  review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus dignissimos nostrum possimus, omnis, officiis ullam repellendus dolorem temporibus, illum in modi accusantium" image={customerPic} name="Elon Musk" classOfCard="customerReview-card1" />
        <CustomerReview  review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus dignissimos nostrum possimus, omnis, officiis ullam repellendus dolorem temporibus, illum in modi accusantium" image={customerPic} name="Elon Musk" classOfCard="customerReview-card2" />
        <CustomerReview  review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus dignissimos nostrum possimus, omnis, officiis ullam repellendus dolorem temporibus, illum in modi accusantium" image={customerPic} name="Elon Musk" classOfCard="customerReview-card1" />
        <CustomerReview  review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus dignissimos nostrum possimus, omnis, officiis ullam repellendus dolorem temporibus, illum in modi accusantium" image={customerPic} name="Elon Musk" classOfCard="customerReview-card2" />

    
        </Slider>
        </div>
      </div>
      {/* CUSTOMER REVIEWS ENDS */}

      {/* WHY CHOOSE US StARTS */}
      <div className="container my-5">
      <h1 className="text-center section-heading mb-5 ">Why Choose US?</h1>
        <div className="row">
        <WhyUS image={Service} title="Service" description="Door to door fast delivery service is available with us to give you the best of your experience." />
        <WhyUS image={Privacy} title="Privacy" description="All transactions are 100% secure and as fast as super jet. Pay with card , Upi or any way you want." />
        <WhyUS image={chatSupport} title="Chat Support" description="We're live 24*7 for any queries and complaints of yours , feel free to contact us anytime." />

        </div>
      </div>
      {/* WHY CHOOSE US ENDS */}

      <Footer />
    </>
  );
}
