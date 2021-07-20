import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p data-testid="info">
        {readMore ? info : info && `${info.substring(0, 200)}...`}
        <button
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "show less" : "show more"}
        </button>
      </p>
      <button className="delete-btn" onClick={() => removeTour(id)}>
        not interested
      </button>
    </article>
  );
};

export default Tour;
