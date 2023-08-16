import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import addressApi from "../../api/address";
import Loader from "../loader/Loader";

export default function MyAddresses() {
  const [addNewAddress, setAddNewAddress] = useState(false);
  const {
    data: addressData,
    loading,
    error,
    request: fetchAddress,
  } = useApi(addressApi.get);

  useEffect(() => {
    fetchAddress();
  }, []);

  if (!addressData || loading) return <Loader type="dots" />;
  else if (error) return <div>{addressData.message}</div>;

  return (
    <>
      <div className="container d-flex flex-column">
        <div className="fs-4 text-center mt-3">My Addresses</div>
        {addressData?.addresses?.addressDetails.map((address) => (
          <div className="d-flex flex-row justify-content-between py-2 px-3 m-3 rounded border-2 shadow-sm">
            <div className="my-2 px-2">
              {/* <span className="border border-primary text-primary rounded rounded-full px-2">
                Home
              </span> */}
              <br /> <span className="address-info">Name: </span>
              {address.name} <br />{" "}
              <span className="address-info">Phone Number: </span>
              {address.phoneNumber} <br />{" "}
              <span className="address-info">City:</span> {address.city} <br />{" "}
              <span className="address-info">State:</span> {address.state}
            </div>
            <div className="my-2 px-2">
              <br /> <span className="address-info">House/Flat no.:</span>{" "}
              {address.house_flat_no} <br />{" "}
              <span className="address-info">Area/Street/Colony:</span>{" "}
              {address.area_street_colony} <br />{" "}
              <span className="address-info">Pin Code:</span> {address.pincode}
            </div>
            {/* <div className="edit-btn my-auto">Edit</div> */}
          </div>
        ))}
        {/* <div
          className="add-btn my-3 mx-auto"
          onClick={() => {
            setAddNewAddress(!addNewAddress);
          }}
        >
          {!addNewAddress ? "Add New Address" : "Cancel"}
        </div> */}

        {addNewAddress ? (
          <div>
            <form>
              <div className="form-floating mb-3 p-0">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="name@example.com"
                />
                <label className="text-secondary" htmlFor="">
                  Your Name
                </label>
              </div>

              <div className="form-floating mb-3 p-0">
                <input
                  type="number"
                  className="form-control"
                  id=""
                  placeholder="name@example.com"
                />
                <label className="text-secondary" htmlFor="">
                  Phone Number
                </label>
              </div>

              <div className="form-floating mb-3 p-0">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="name@example.com"
                />
                <label className="text-secondary" htmlFor="">
                  House Number
                </label>
              </div>

              <div className="form-floating mb-3 p-0">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="name@example.com"
                />
                <label className="text-secondary" htmlFor="">
                  Road , Area , Street , Colony
                </label>
              </div>

              <div className=" d-flex flex-row">
                <div className="form-floating mb-3 p-0 me-2 container">
                  <input
                    type="number"
                    className="form-control"
                    id=""
                    placeholder="name@example.com"
                  />
                  <label className="text-secondary" htmlFor="">
                    Pincode
                  </label>
                </div>

                <div className="form-floating mb-3 p-0 mx-2 container">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="name@example.com"
                  />
                  <label className="text-secondary" htmlFor="">
                    City
                  </label>
                </div>
              </div>

              <div className="form-floating mb-3 p-0">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="name@example.com"
                />
                <label className="text-secondary" htmlFor="">
                  State
                </label>
              </div>
            </form>
            <div className="d-flex flex-row justify-content-center">
              <div
                className="cancel-btn  me-2"
                onClick={() => {
                  setAddNewAddress(!addNewAddress);
                }}
              >
                Cancel
              </div>
              <div className="next-btn">Save Address </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
