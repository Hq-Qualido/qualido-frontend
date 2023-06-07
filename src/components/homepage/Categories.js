import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

import Loader from "../loader/Loader";
import { baseUrl } from "../../BaseUrl";

import "./Categories.css";

export default function Categories() {
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

  return (
    <>
      <div className="container category_section d-flex flex-wrap">
        <div className="col-lg-3 col-sm-6 p-2 d-flex flex-column justify-content-start align-items-start">
          <div className="fs-3 my-1">All categories..</div>
          <p className="text-secondary">
            We provide a large variety of books from all genres at one place.
          </p>
          <Link
            to="/products"
            className="category_btn d-flex flex-row justify-content-center align-items-center"
            style={{ textDecoration: "none" }}
          >
            <div className="text-dark px-2">Browse All</div>
            <button className="category_btn_arrow text-secondary">
              <FaArrowRight />
            </button>
          </Link>
        </div>
        <div className="all_categories p-4 col-lg-9 col-sm-6 d-flex flex-row">
          {allCategories.length > 0 ? (
            allCategories?.map((item) => {
              return (
                <div className="mx-2" key={item._id}>
                  <Link to={`/products?category=${item.name}`} className="category_image">
                    <img src={item.url} alt={item.name} />
                  </Link>
                  <div className="text-capitalize text-secondary fs-5 px-1">
                    {item.name}
                  </div>
                </div>
              );
            })
          ) : (
            <Loader type="dots" />
          )}
        </div>
      </div>
    </>
  );
}
