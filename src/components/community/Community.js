import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import "./Community.css";

export default function Community() {
  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
    setSentMessage((prev) => [...prev, message]);
  };

  return (
    <>
      <div className="chat_container my-2 d-flex flex-column">
        {showMessage && (
          <div className="message_box">
            {sentMessage &&
              sentMessage.map((message, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex flex-row justify-content-center align-items-center"
                  >
                    <div className="message shadow-sm my-1">{message}</div>
                    <span className="mx-1 bg-secondary text-light px-1 rounded rounded-5">
                      {" "}
                      <FaUserAlt />{" "}
                    </span>
                  </div>
                );
              })}
          </div>
        )}
        <div className="type_message d-flex flex-row justify-content-center align-items-center">
          <form className=" d-flex flex-row">
            <input
              type="text"
              className="chat_input mx-1"
              required
              autoComplete="off"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Type here..."
            />
            <button
              onClick={handleSubmit}
              className="mx-2 d-flex flex-row justify-content-center align-items-center bg-primary py-2 px-3 rounded rounded-5 text-white border-0"
            >
              <span className="mx-1">Send</span> <AiOutlineSend />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
