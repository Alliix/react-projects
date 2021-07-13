import React, { useState, useEffect } from "react";
import Review from "./Review";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";

function Reviews() {
  const people = data;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      <div className="section-center">
        {people.map((person, personIndex) => {
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (personIndex === people.length - 1 && index === 0)
          ) {
            position = "lastSlide";
          }
          return (
            <Review
              review={person}
              position={position}
              key={person.id}
            ></Review>
          );
        })}
      </div>
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </>
  );
}

export default Reviews;
