import React from "react";

export default function WriteBlog({ show }) {
  return (
    <>
      {show && (
        <div className="write_blog col-lg-6 col-sm-6 d-flex flex-column rounded px-3 py-2 my-4">
          <div className="mb-2 fs-5">
            Write Your Own Blog
            <span className="fs-6">({new Date().toLocaleDateString()})</span>
          </div>
          <div className="row">
            <div lg={12} className="mb-4">
              <div className="">
                <div className="card-body">
                  <textarea
                    rows={1}
                    placeholder="Your blog title..."
                    className="d-block mx-auto my-2 px-2 py-1 rounded"
                    style={{ width: "95%" }}
                  ></textarea>
                  <textarea
                    rows={4}
                    placeholder="Your blog content goes here..."
                    className="d-block mx-auto my-2 px-2 py-1 rounded"
                    style={{ width: "95%" }}
                  ></textarea>
                </div>
                <div className="btn btn-primary d-block mx-3">Post Now</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
