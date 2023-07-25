import React from "react";

export default function Address({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  house_flat_no,
  setHouse_flat_no,
  area_street_colony,
  setArea_street_colony,
  pincode,
  setPincode,
  state,
  setState,
  city,
  setCity,
}) {
  return (
    <>
      <form>
        <div className="form-floating mb-3 p-0">
          <input
            type="text"
            className="form-control"
            id=""
            placeholder="name@example.com"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
            value={house_flat_no}
            onChange={(e) => setHouse_flat_no(e.target.value)}
          />
          <label className="text-secondary" htmlFor="">
            House/Flat Number
          </label>
        </div>

        <div className="form-floating mb-3 p-0">
          <input
            type="text"
            className="form-control"
            id=""
            placeholder="name@example.com"
            value={area_street_colony}
            onChange={(e) => setArea_street_colony(e.target.value)}
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
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
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
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <label className="text-secondary" htmlFor="">
            State
          </label>
        </div>
      </form>
    </>
  );
}
