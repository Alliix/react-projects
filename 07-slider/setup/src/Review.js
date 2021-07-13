import React from "react";
import { FaQuoteRight } from "react-icons/fa";

function Review({ review, position }) {
  const { image, name, title, quote } = review;
  return (
    <article className={position}>
      <img src={image} alt={name} className="person-img"></img>
      <h4>{name}</h4>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
}

export default Review;
