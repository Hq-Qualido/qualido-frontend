import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaUserAlt, FaRobot } from "react-icons/fa";
import "./Community.css";
import replies from "./Replies";
import Empty from "../../assets/Empty.png";

export default function Community() {
  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const [reply, setReply] = useState([]);
  const [showReply, setShowReply] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
    setSentMessage((prev) => [...prev, message]);
    setMessage("");
    if (sentMessage.length > 0) {
      setShowReply(true);
      setReply((prev) => [...prev, replies[sentMessage.length - 1]]);
    }
  };

  return (
    <>
      <div className="chat_container my-2 d-flex flex-column">
        {showMessage ? (
          <div className="message_box">
            {sentMessage &&
              sentMessage.map((message, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex flex-row justify-content-center align-items-center"
                  >
                    <div className="message shadow-sm my-1">{message}</div>
                    <span className="mx-1 bg-secondary text-light px-1 rounded rounded-pill">
                      <FaUserAlt />
                    </span>
                  </div>
                );
              })}
          </div>
        ) : (
          <>
            <div className="d-flex flex-column justify-content-center align-items-center my-auto">
              <img src={Empty} style={{ width: "300px" }} alt="" />
              <div className="my-2 fs-5">
                Please ask your doubt in below box ...
              </div>
            </div>
          </>
        )}

        {showReply && (
          <div className="message_reply">
            {reply.map((reply, index) => {
              return (
                <div
                  key={index}
                  className="d-flex flex-row justify-content-center align-items-center"
                >
                  <span className="mx-1 bg-secondary text-light px-1 rounded rounded-pill">
                    <FaRobot />
                  </span>
                  <div className="message shadow-sm my-1">{reply}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="type_message d-flex flex-row justify-content-center align-items-center">
        <form className="d-flex flex-row">
          <input
            type="text"
            className="chat_input mx-1 border border-2 border-dark"
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
            className="mx-2 d-flex flex-row justify-content-center align-items-center bg-primary py-2 px-3 rounded rounded-pill text-white border-0"
          >
            <span className="mx-1">Send</span> <AiOutlineSend />
          </button>
        </form>
      </div>
    </>
  );
}
