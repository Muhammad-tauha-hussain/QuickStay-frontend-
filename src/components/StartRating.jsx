import React from "react";
import { assets } from "../assets/assets";


const StarRating = ({ Rating = 4 }) => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => (
          <img
            src={
              Rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            alt="star-icon"
            className="w-4.5 h-4.5"
          />
        ))}
    </>
  );
};

export default StarRating;