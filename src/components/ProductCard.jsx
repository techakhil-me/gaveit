import React from "react";
import Stars from "./Stars";
import { Link } from "react-router-dom";

const ProductCard = ({
  title,
  thumbnail,
  current_price,
  before_price,
  total_reviews,
  rating,
  asin
}) => {
  return (
    <Link
      className="inline-flex shadow-md flex-col space-y-4 items-start justify-center  p-4 bg-default rounded-lg w-64"
      style={{ minWidth: "16rem" }}
      to={"/product/" + asin}
    >
      <div className="relative w-full h-44">
        <img
          className="absolute transform  -translate-x-1/2 inset-x-1/2 w-auto h-full object-cover"
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="flex flex-col space-y-2 items-start justify-start w-full">
        <p className="text-xs font-semibold leading-none text-gray-400">
          Ships to location
        </p>
        <p className="w-full text-lg font-medium leading-tight text-gray-800 line-clamp-2 min-h-max">
          {title}
        </p>
        <div className="inline-flex space-x-5 items-center justify-between">
          <Stars rating={rating} />
          <p className="text-xs font-semibold leading-none text-gray-400">
            {total_reviews} reviews
          </p>
        </div>
      </div>
      <div className="inline-flex space-x-4 items-center justify-between">
        <p className="text-xl font-bold leading-7 text-gray-800">
          Rs {current_price}
        </p>
        <p className="text-base font-medium leading-normal line-through text-gray-500">
          Rs {before_price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
