import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Gateway.css";
import Address from "./Address";
import OrderSummary from "./OrderSummary";
import PaymentMethods from "./PaymentMethods";
import PaymentSteps from "./PaymentSteps";
import useApi from "../../hooks/useApi";
import CartDataContext from "../../hooks/CartContext";
import PaymentHandler from "../../api/payment";
import addressApi from "../../api/address";
import orderApi from "../../api/order";
import { useCart } from "react-use-cart";
import { Helmet } from "react-helmet";

export default function Payment() {
  const { setCartData } = useContext(CartDataContext);
  const { setItems } = useCart();

  const [steps, setSteps] = useState(1);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [house_flat_no, setHouse_flat_no] = useState("");
  const [area_street_colony, setArea_street_colony] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isAddressFilled, setIsAddressFilled] = useState(false);

  const navigate = useNavigate();
  const { state: orderDetail } = useLocation();

  const {
    data: payData,
    res: payResp,
    loading,
    error,
    request,
    networkError,
  } = useApi(PaymentHandler.createPayment);

  const {
    request: addAddress,
    data: addAddressData,
    error: addAddressError,
    loading: addAddressLoading,
  } = useApi(addressApi.add);

  const {
    data: orderData,
    request: updateOrder,
    error: updateOrderError,
  } = useApi(orderApi.updateOrder);

  const { data: addressData, request: fetchAddress } = useApi(addressApi.get);

  useEffect(() => {
    fetchAddress();
  }, []);

  useEffect(() => {
    if (addressData?.message === "address_fetched" && addressData?.addresses) {
      const address = addressData?.addresses.addressDetails[0];

      if (address.name !== "") setIsAddressFilled(true);

      setName(address.name);
      setPhoneNumber(address.phoneNumber);
      setHouse_flat_no(address.house_flat_no);
      setArea_street_colony(address.area_street_colony);
      setPincode(address.pincode);
      setCity(address.city);
      setState(address.state);
    }
  }, [addressData]);

  async function handlePayment() {
    try {
      await request({
        orderId: orderDetail.orderId,
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (
      !error &&
      !networkError &&
      payData?.message === "payment_session_created"
    ) {
      console.log("IN PAYMENT JS");
      setCartData([]);
      setItems([]);
      if (paymentMethod === "cod") navigate("/#/payment/success");
    }
  }, [payData]);

  const handleAddAddress = () => {
    const address = {
      name,
      phoneNumber,
      house_flat_no,
      area_street_colony,
      pincode,
      city,
      state,
    };

    addAddress(address);
  };

  useEffect(() => {
    const address = {
      name,
      phoneNumber,
      house_flat_no,
      area_street_colony,
      pincode,
      city,
      state,
    };
    if (
      !addAddressLoading &&
      (addAddressData?.message === "address_added_successfully" ||
        addAddressData?.message === "new_address_added_successfully")
    ) {
      updateOrder({
        orderId: orderDetail.orderId,
        address: {
          ...address,
          _id: isAddressFilled
            ? addressData.addresses.addressDetails[0]._id
            : addAddressData.addressId,
        },
      });
      if (updateOrderError) return alert("Something went wrong.");
      // setSteps(steps + 1);
    }
  }, [addAddressData]);

  useEffect(() => {
    if (orderData && !updateOrderError) setSteps((step) => step + 1);
    else if (updateOrderError) return alert(orderData.message);
  }, [orderData]);

  const handleNextClick = () => {
    switch (steps) {
      case 1:
        if (
          !name ||
          !phoneNumber ||
          !house_flat_no ||
          !area_street_colony ||
          !pincode ||
          !city ||
          !state
        )
          return alert("Please fill all details.");
        // if (!addAddressError && !addAddressLoading) setSteps(steps + 1);
        if (!isAddressFilled) handleAddAddress();
        break;
      case 2:
        updateOrder({ orderId: orderDetail.orderId, paymentMethod });
        break;
      case 3:
        handlePayment();
        break;
      default:
        setSteps(steps + 1);
        break;
    }
  };

  useEffect(() => {
    if (payData && !error && !loading) {
      return window.location.replace(payResp.data.url);
    } else if (error) {
      console.log(error);
    } else if (networkError) {
      console.log(networkError);
    }
  }, [payData, error, loading, payResp, networkError]);

  return (
    <>
      <Helmet
        title="Secure Payment | Qualido.in"
        content="This is your orders page of qualido webite"
        url="/payment"
      />
      {!loading ? (
        <>
          <PaymentSteps step={steps} />

          <div className="payment_container p-lg-2 p-sm-1 mx-auto">
            {steps === 1 ? (
              <Address
                name={name}
                setName={setName}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                house_flat_no={house_flat_no}
                setHouse_flat_no={setHouse_flat_no}
                area_street_colony={area_street_colony}
                setArea_street_colony={setArea_street_colony}
                pincode={pincode}
                setPincode={setPincode}
                state={state}
                setState={setState}
                city={city}
                setCity={setCity}
              />
            ) : (
              ""
            )}
            {steps === 2 ? (
              <PaymentMethods
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
            ) : (
              ""
            )}
            {steps === 3 ? <OrderSummary orderId={orderData?.orderId} /> : ""}

            <div className="d-flex flex-row justify-content-center">
              <div
                className="cancel-btn  me-2"
                onClick={() => {
                  if (steps === 1) return navigate("/cart");
                  setSteps(steps - 1);
                }}
              >
                {steps === 1 ? "Cancel" : "Previous"}
              </div>
              <div className="next-btn" onClick={handleNextClick}>
                {steps !== 3
                  ? addAddressLoading
                    ? "loading..."
                    : "Next"
                  : paymentMethod === "cod"
                  ? "Place Order"
                  : "Make Payment"}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="fs-5 text-Secondary p-3 text-center">
          Redirecting to stripe...
        </div>
      )}
    </>
  );
}
