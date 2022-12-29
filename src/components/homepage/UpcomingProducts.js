import React from "react";
import Books from "../../assets/Books.svg";
import Clothing from "../../assets/Clothing.svg";
import Headphones from "../../assets/Headphones.svg";
import Pencils from "../../assets/Pencils.svg";

export default function UpcomingProducts() {
  return (
    <>
      <div className="future_prods">

        <div className="future_prods_1 card  ">
          <img src={Pencils} className="card-img" alt="..." />
          <div className="card-img-overlay fs-5 position-absolute top-50 start-50 translate-middle">
            <div  className="card-title">Stationaries </div >
          </div>
        </div>

        <div className="future_prods_2 card  ">
          <img src={Clothing} className="card-img" alt="..." />
          <div className="card-img-overlay fs-5 position-absolute top-50 start-50 translate-middle">
            <div  className="card-title"> Clothing</div >
          </div>
        </div>

        <div className="future_prods_3 card  ">
          <img src={Headphones} className="card-img" alt="..." />
          <div className="card-img-overlay fs-5 position-absolute top-50 start-50 translate-middle">
            <div  className="card-title">Headphones </div >
          </div>
        </div>

        <div className="future_prods_4 card  ">
          <img src={Books} className="card-img" alt="..." />
          <div className="card-img-overlay fs-5 position-absolute top-50 start-50 translate-middle">
            <div  className="card-title">Books </div >
          </div>
        </div>

      </div>
    </>
  );
}
