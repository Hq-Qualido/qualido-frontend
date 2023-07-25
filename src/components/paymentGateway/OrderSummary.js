import React, { useContext, useEffect, useState } from "react";
import CartDataContext from "../../hooks/CartContext";
import useApi from "../../hooks/useApi";
import orderApi from "../../api/order";

export default function OrderSummary({ orderId }) {
  // const [orderDetails, setOrderDetails] = useState({});

  // const { cartData } = useContext(CartDataContext);

  const { data: orderData, request: getOrderDetails } = useApi(
    orderApi.getOrder
  );

  useEffect(() => {
    getOrderDetails(orderId);
  }, []);

  console.log(orderData);

  // useEffect(() => {
  //   setOrderDetails(orderData);
  // }, [orderData]);

  return (
    <>
      <div className="border-bottom p-2 d-flex flex-column">
        {orderData?.products.map((item, index) => {
          return (
            <div
              key={index}
              className="container d-flex flex-row justify-content-evenly align-items-center"
            >
              <div className="px-2 py-1">
                <img
                  className="my-2 my-auto"
                  style={{ width: "50px" }}
                  src={item?.urls[0]}
                  alt=""
                />
              </div>
              <div className="my-auto mx-1">
                <div className="text-dark overflow-hidden">
                  {item.prodName.slice(0, 20)}...
                </div>
                <div className="text-secondary overflow-hidden">
                  Quantity = {item.quantity}
                </div>
              </div>
              <div className="text-secondary my-auto ms-auto me-1">
                Rs. {item.prodMrp * item.quantity}
              </div>
            </div>
          );
        })}
      </div>

      <div className="my-3">
        <div className="fs-5 text-center" style={{ fontWeight: "500" }}>
          Price Details
        </div>
        <div className="container">
          <div className="d-flex flex-row justify-content-between my-1 p-1">
            <div>Price ({orderData?.products.length} items)</div>
            <div>₹ {orderData?.totalProdMrp}</div>
          </div>

          <div className="d-flex flex-row justify-content-between my-1 p-1">
            <div>Discount</div>
            <div>
              -₹ {orderData?.totalProdMrp - orderData?.totalProductsAmount}
              {"  "}({orderData?.discount}%)
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between my-1 p-1">
            <div>Delivery Charge</div>
            <div>₹ {orderData?.deliveryCharge}</div>
          </div>

          <div className="border-top d-flex flex-row justify-content-between my-2 p-2 fs-5">
            <div> Subtotal ({orderData?.products.length} Items) : </div>
            <div style={{ fontWeight: "500" }}>
              ₹ {orderData?.totalProductsAmount + orderData?.deliveryCharge}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
