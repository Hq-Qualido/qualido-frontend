import React, { useState } from "react";
import Footer from "../footer/Footer";
import "./Feedback.css";

export default function Feedback() {
  const [prodFeedback, setProdFeedback] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [rating, setRating] = useState("");

  const [feedbackError, setFeedbackError] = useState('');
  const [ratingError, setRatingError] = useState('');
  
  const handleSubmit = () => {
    if(prodFeedback.length<=0) setFeedbackError('Please type your feedback!');
    else setFeedbackError('')
    if(rating.length<=0) setRatingError('Please provide rating!');
    else if(rating > 5 || rating <=0) setRatingError('Rate us on a scale of (1-5)!')
    else setRatingError('')
  };
  return (
    <>
      <form className="feedback_form px-5 py-5 d-flex flex-column justify-content-center shadow border rounded-2 my-2">
        <div className="mb-3 fs-4 text-center px-6">Feedback Form</div>
        <div className="my-2 text-center">
          Hi <span style={{ fontWeight: "500" }}> email@gmail.com </span> , We
          really appreciate your feedback. Let us know if you have any
          suggestions/improvements for us.
        </div>
        <div className="mt-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Product feedback
            <span className="text-danger"> *</span>
          </label>
          <textarea
            className="form-control"
            id="prodFeedback"
            name="prodFeedback"
            value={prodFeedback}
            onChange={(e) => {
              setProdFeedback(e.target.value);
            }}
            rows="3"
            placeholder="Please give us your feedback about the product"
          ></textarea>
        </div>
        {feedbackError.length>0?<span className="error_message">{feedbackError}</span> :""}
        <div className="mt-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Your Suggestions
          </label>
          <textarea
            className="form-control"
            id="suggestions"
            name="suggestions"
            value={suggestions}
            onChange={(e) => {
              setSuggestions(e.target.value);
            }}
            rows="3"
            placeholder="Any suggestions/improvements about our service"
          ></textarea>
        </div>
        <div className="mt-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Rating(Out of 5)
            <span className="text-danger"> *</span>
          </label>
          <input
            className="form-control"
            type="number"
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
            rows="3"
            placeholder="Rate us on a scale of 5"
          ></input>
        </div>
        {ratingError.length>0?<span className="error_message">{ratingError}</span> :""}

        <div onClick={handleSubmit} className="dislodged-border mt-3 mb-2">
          Submit
        </div>
      </form>
      
      <Footer />
    </>
  );
}
