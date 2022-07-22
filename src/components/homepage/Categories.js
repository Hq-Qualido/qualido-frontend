import React from "react";
import { Link } from "react-router-dom";

export default function Categories(props) {
  console.log(props.name,"props");

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
        <h4 className="text-center category-type">{props.name}</h4>
      </div>
    </>
  );
}
