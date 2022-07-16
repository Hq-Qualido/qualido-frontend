import React from "react";
import { Link } from "react-router-dom";

export default function Categories(props) {
  return (
    <>

      <div className=" category-item">
        <Link to={props.url}>
          <div className="div category-item-body">
            <div className="item-image">
              <img src={props.image} alt="" />
            </div>
          </div>
        </Link>
        <h4 className="text-center category-type">{props.title}</h4>
      </div>
    </>
  );
}
