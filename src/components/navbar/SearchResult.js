import React, { useRef, useEffect } from "react";
import { MdClose ,MdOutlineOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";

function SearchResult(props) {

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          console.log(props);
          props.searchResult(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <div ref={wrapperRef} className="search_result text-dark shadow">
        <div className="d-flex justify-content-between border-bottom py-2">
            <span className="mx-1">Search Result</span>
          <span
            onClick={() => {
              props.searchResult(false);
            }}
          >
            <MdClose />
          </span>
        </div>
        {props.searchData.length > 0 ? (
          <>
            {props.searchData.map((item, index) => {
              return (
                <>
                  <Link
                    to={`/products/${item._id}`}
                    key={index}
                    onClick={() => {
                      props.searchResult(false);
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className=" d-flex flex-row searched_product_details">
                      <img
                        className="searched_image mx-2 my-2"
                        src={item.url}
                        alt={item.prodName}
                      />
                      <div className="my-auto mx-1">
                        <div className="text-dark overflow-hidden">{item.prodName.length>40?item.prodName.slice(0,40)+"...":item.prodName}  </div>
                        <div className="text-secondary overflow-hidden">
                          Author : {item.authorName}
                        </div>
                      </div>
                      <div className="text-secondary my-auto ms-auto me-1">
                        <MdOutlineOpenInNew />
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </>
        ) : (
          "Nothing to show here!"
        )}
      </div>
    </>
  );
}

export default SearchResult;
