import React from "react";
import { useState, useEffect } from "react";
import { FaStar, FaRupeeSign } from "react-icons/fa";
import { MdOutlineHighQuality } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
// import ProductCard from "./ProductCard";
import Footer from "../footer/Footer";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router";
import { useCart } from "react-use-cart";
import Loader from "../loader/Loader";
import { baseUrl } from "../../BaseUrl";

export default function ProductId() {
  let { productId } = useParams();
  const location = useLocation();
  const [aboutAuthorDesc, setAboutAuthorDesc] = useState(150);
  const [descLength, setDescLength] = useState(200);

  // const randomNumber = Math.random() * 10;
  const [indivProd, setIndivProd] = useState([]);
  const [sameProds, setSameProds] = useState([]);
  const [category, setCategory] = useState("");

  const fetchProductData = async () => {
    const url1 = `${baseUrl}/products`;
    const response1 = await fetch(url1);
    const data1 = await response1.json();

    data1.products.forEach((prodData) => {
      if (prodData._id === productId) {
        setIndivProd(prodData);
        setCategory(prodData.category);
      }
    });
  };

  const fetchSimiliarProducts = async () => {
    const url2 = `${baseUrl}/products?category=${category}`;
    const response2 = await fetch(url2);
    const data2 = await response2.json();
    setSameProds(data2.products);
  };

  useEffect(() => {
    fetchProductData();
    fetchSimiliarProducts();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [productId, location]);

  const { addItem, getItem } = useCart();
  const checkItemInCart = getItem(indivProd._id);

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4 col-sm-6 productID-left">
            {indivProd.url ? (
              <div>
                <img src={indivProd.url} alt="BookImage" />
              </div>
            ) : (
              <Loader type="dots" />
            )}
            <div className="product-buttons my-4">
              {checkItemInCart ? (
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <div className="cart-btn mx-1">Go to Cart</div>
                </Link>
              ) : (
                <div
                  className="cart-btn mx-1"
                  onClick={() =>
                    addItem({
                      id: indivProd._id,
                      price: indivProd.prodSp,
                      ...indivProd,
                    })
                  }
                >
                  Add to Cart
                </div>
              )}
              <div className="buy-btn mx-1">
                <FaRupeeSign /> Buy Now
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-6 productID-right">
            <div className="prod_heading my-2">
              {indivProd.prodName}{" "}
              <span style={{ fontSize: "20px", color: "grey" }}> by </span>{" "}
              {indivProd.authorName}
            </div>

            <div className="ratings_reviews mb-3">
              <span className="star_rating mx-2">
                4.5 <FaStar />
              </span>
              <span>145 ratings</span>
            </div>
            <div className="product-price my-3">
              Rs {indivProd.prodSp}{" "}
              <span className="line_through_text">{indivProd.prodMrp}</span>
              <span className="saving"> {indivProd.discount}% Off</span>
            </div>

            <table className="about_author_table">
              <tbody>
                <tr>
                  <td className="col-lg-4 col-sm-6 light_text">Author</td>
                  <td className="col-lg-8 col-sm-6">
                    {indivProd.authorName ? indivProd.authorName : "NA"}
                  </td>
                </tr>

                {indivProd.aboutAuthor ? (
                  <tr>
                    <td className="col-lg-4 col-sm-6 light_text product_description">
                      About Author
                    </td>
                    <td className="col-lg-8 col-sm-6">
                      {indivProd.aboutAuthor
                        ? indivProd.aboutAuthor.slice(0, aboutAuthorDesc)
                        : ""}
                      {aboutAuthorDesc === 150 ? (
                        <span
                          className="read_more"
                          onClick={(e) => {
                            setAboutAuthorDesc(indivProd.aboutAuthor.length);
                          }}
                        >
                          ...Read more
                        </span>
                      ) : (
                        ""
                      )}
                      {aboutAuthorDesc === indivProd.aboutAuthor.length ? (
                        <span
                          className="read_more"
                          onClick={(e) => {
                            setAboutAuthorDesc(150);
                          }}
                        >
                          ...Read less
                        </span>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </tbody>
            </table>

            {/* _______________ */}
            <h5 className="mt-4">Specifications </h5>
            <table className="about_product_table">
              <tbody>
                <tr>
                  <td className="col-lg-4 col-sm-6 light_text">Publisher</td>
                  <td className="col-lg-8 col-sm-6">
                    {indivProd.publisher ? indivProd.publisher : "NA"}
                  </td>
                </tr>
                <tr>
                  <td className="col-lg-4 col-sm-6 light_text">
                    Language Availability
                  </td>
                  <td className="col-lg-8 col-sm-6">
                    {indivProd.language ? indivProd.language : "NA"}
                  </td>
                </tr>
                <tr>
                  <td className="col-lg-4 col-sm-6 light_text">Book type </td>
                  <td className="col-lg-8 col-sm-6">
                    {indivProd.bookType ? indivProd.bookType : "NA"}
                  </td>
                </tr>
                <tr>
                  <td className="col-lg-4 col-sm-6 light_text">
                    Number of pages{" "}
                  </td>
                  <td className="col-lg-8 col-sm-6">
                    {indivProd.numOfPages ? indivProd.numOfPages : "NA"}
                  </td>
                </tr>
                <tr>
                  <td className="col-lg-4 col-sm-6 light_text">Height </td>
                  <td className="col-lg-8 col-sm-6">
                    {indivProd.height ? indivProd.height : "NA"}
                  </td>
                </tr>
                <tr>
                  <td className="col-lg-4 col-sm-6 light_text">Width </td>
                  <td className="col-lg-8 col-sm-6">
                    {indivProd.width ? indivProd.width : "NA"}
                  </td>
                </tr>
                <tr>
                  <td className="col-lg-4 col-sm-6 light_text">Length </td>
                  <td className="col-lg-8 col-sm-6">
                    {indivProd.length ? indivProd.length : "NA"}
                  </td>
                </tr>
                <tr>
                  <td className="col-lg-4 col-sm-6 light_text">Weight </td>
                  <td className="col-lg-8 col-sm-6">
                    {indivProd.weight ? indivProd.weight : "NA"}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* _______________ */}
            {indivProd.description ? (
              <table className="">
                <tbody>
                  <tr>
                    <td className="col-lg-4 col-sm-6 light_text product_description">
                      Description
                    </td>
                    <td className="col-lg-8 col-sm-6 book-lines">
                      {indivProd.description.slice(0, descLength)}
                      {descLength === 200 ? (
                        <span
                          className="read_more"
                          onClick={(e) => {
                            setDescLength(indivProd.description.length);
                          }}
                        >
                          ...Read more
                        </span>
                      ) : (
                        ""
                      )}
                      {descLength === indivProd.description.length ? (
                        <span
                          className="read_more"
                          onClick={(e) => {
                            setDescLength(200);
                          }}
                        >
                          ...Read less
                        </span>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              ""
            )}

            <div className="d-flex flex-row p-2 my-5 border-top p-2">
              <div className=" mx-auto text-secondary d-flex flex-column text-center w-auto">
                <span className="fs-4">
                  <MdOutlineHighQuality />
                </span>
                <span> Quality Product </span>
              </div>
              <div className="mx-auto text-secondary d-flex flex-column text-center w-auto">
                <span className="fs-4">
                  <RiSecurePaymentFill />
                </span>
                <span> Secure Payment </span>
              </div>
              <div className="mx-auto text-secondary d-flex flex-column text-center w-auto">
                <span className="fs-4">
                  <TbTruckDelivery />
                </span>
                <span> COD Available</span>
              </div>
            </div>

            {/* SIMILIAR PRODUCT LIST STARTS */}

            {/* <div className="products-list container-fluid">
              <h3 className="text-center">View Similiar products...</h3>
              <div className="products-list-body">
                {sameProds.slice(randomNumber, randomNumber + 4)?.map((p) => {
                  return (
                    <ProductCard
                      key={p._id}
                      {...p}
                      id="62c6e23f7bf811b8bbc1a309"
                      navigator={true}
                    />
                  );
                })}
              </div>
            </div> */}
            {/* SIMILIAR PRODUCT LIST ENDS */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
