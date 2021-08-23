import React from "react";
import { ReactComponent as Fullstar } from "../assets/Fullstar.svg";
import { ReactComponent as Halfstar } from "../assets/Halfstar.svg";
const Stars = ({ rating=5 }) => {
  const fullStar = parseInt(rating);
  const halfStar = 2 * (rating - fullStar) ? 1 : 0;

  return (
    <div className="flex space-x-1 items-start justify-start">
      {[...Array(fullStar)].map((e, i) => {
        return <Fullstar key={i} />;
      })}
      {[...Array(halfStar)].map((e, i) => {
        return <Halfstar key={i} />;
      })}
      {/* {rating} */}
    </div>
  );
};

export default Stars;
