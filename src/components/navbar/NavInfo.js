import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavInfo() {
  return (
    <>
      <div className="container-fluid nav_info">
        <div className="d-flex align-items-center justify-content-between fs-6">
          <div className="d-flex flex-wrap">
            <Link to="/blog" className="mx-1 whatsapp_link_contact">Blog</Link>
            <a
              className="whatsapp_link_contact mx-2"
              href="https://wa.me/+917042523617?text=I%20want%20to%20buy%20a%20book."
              target="_blank"
              rel="noreferrer"
            >
              Contact-Us
            </a>
            <a
              className="email_contact mx-2"
              href="mailto:info.qualido21+website-queries@gmail.com"
              subject="Qualido website queries"
            >
              Support
            </a>
          </div>
          <div className="d-flex flex-wrap">
            <a
              href="https://www.instagram.com/qualido.in/"
              target="_blank"
              rel="noreferrer"
              className="instagram_link"
            >
              <span className="mx-2 fs-5">
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/company/qualido-hq/"
              target="_blank"
              rel="noreferrer"
              className="linkedin_link"
            >
              <span className="mx-2 fs-5">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
