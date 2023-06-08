import React, { useState } from "react";
import Footer from "../footer/Footer";
import blogPosts from "./BlogPosts.json";
import { FaRegHeart, FaRegThumbsUp, FaRegLaugh, FaUser } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import "./BlogPage.css";
import { FaEdit } from "react-icons/fa";
import WriteBlog from "./WriteBlog";

const BlogPage = () => {
  const [blog, setBlog] = useState(false);
  const handleLike = (index) => {
    console.log("Liked blog post at index", index);
  };

  const handleSupport = (index) => {
    console.log("Supported blog post at index", index);
  };

  const handleLaugh = (index) => {
    console.log("Laughed at blog post at index", index);
  };

  const createBlog = () => {
    setBlog(!blog);
  };

  return (
    <>
      <div className="container position-relative my-3">
        <div className="d-flex align-items-center justify-content-between flex-column flex-lg-row my-3">
          <div className="text-center fs-3">Welcome to the Qualido Blog</div>
          <div className="my_btn">
            <div className="floating_btn" onClick={createBlog}>
              {blog ? <MdClose /> : <FaEdit />}
            </div>
            <WriteBlog show={blog} />
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              lg={4}
              md={6}
              className="col-lg-6 col-sm-6 d-flex flex-wrap mb-4"
            >
              <div className="card">
                <div className="card-body">
                  <div className="card-title fs-5">{post.title}</div>
                  <div className="text-secondary text-xsm">
                    {post.content && post.content.slice(0, 125)}{" "}
                    <span className="text-primary">...Read more</span>
                  </div>
                  <div className="blog_footer d-flex flex-column flex-lg-row justify-content-between">
                    <div className="my-2">
                      <small className="text-info p-2 rounded rounded-md">
                        <FaUser /> {post.author} on {post.date}
                      </small>
                    </div>
                    <div className="mt-2">
                      <div
                        className="btn btn-outline-primary rounded rounded-circle px-2 text-center py-1 me-2"
                        onClick={() => handleLike(index)}
                      >
                        <FaRegHeart /> {post.likes}
                      </div>
                      <div
                        className="btn btn-outline-success rounded rounded-circle px-2 text-center py-1 me-2"
                        onClick={() => handleSupport(index)}
                      >
                        <FaRegThumbsUp /> {post.supports}
                      </div>
                      <div
                        className="btn btn-outline-warning rounded rounded-circle px-2 text-center py-1 me-2"
                        onClick={() => handleLaugh(index)}
                      >
                        <FaRegLaugh /> {post.laughs}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
