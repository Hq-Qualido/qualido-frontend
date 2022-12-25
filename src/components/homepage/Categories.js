import React from "react";
import { Link } from "react-router-dom";

export default function Categories(props) {
  return (
    <>
      <div className="category-item">
        <Link to="/products">
          <div className="div category-item-body">
            <div className="item-image">
              <img src={props.url} alt={props.name}/>
            </div>
          </div>
        </Link>
        <div className="text-center category-type fs-5">{props.name}</div>
      </div>
    </>
  );
}
