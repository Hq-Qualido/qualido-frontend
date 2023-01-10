import React from "react";

export default function Address() {
  return (
    <>
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
    </>
  );
}
