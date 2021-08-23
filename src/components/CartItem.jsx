import React, { useContext } from "react";
import { ReactComponent as DeleteIcon } from "../assets/DeleteIcon.svg";
import Stars from "./Stars";
import { Link } from "react-router-dom";
import { CartContext } from "../Cartcontext";
const CartItem = ({
  asin,
  title,
  img,
  rating,
  total_reviews,
  current_price,
  before_price
}) => {
  const { Cart, dispatch } = useContext(CartContext);
  const handleDelete = () => {
    dispatch({ type: "Delete", id: asin });
  };
  return (
    <div className="grid gap-3 lg:gap-6 grid-rows-2 grid-cols-4 lg:grid-rows-1 lg:grid-cols-8 bg-white shadow rounded-lg">
      <div className="relative col-span-2 row-span-2 lg:row-span-1 lg:col-span-2 rounded-lg">
        <img
          className="absolute transform  -translate-x-1/2 inset-x-1/2 h-full object-cover"
          src={img}
          alt=""
        />
      </div>
      <div className="col-span-2 lg:col-span-3	flex flex-col justify-between h-full py-2">
        <Link
          to={"/product" + asin}
          className="w-full text-xl font-semibold leading-7 text-gray-800"
        >
          {title}
        </Link>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="inline-flex space-x-5 items-center justify-between">
            <Stars rating={rating} />
            <p className="text-xs font-semibold leading-none text-gray-400">
              {total_reviews} reviews
            </p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2	flex lg:flex-col items-center space-x-2 lg:space-x-0 lg:items-start lg:justify-center">
        <p className=" text-lg md:text-2xl flex min-w-min font-bold leading-9 text-gray-800">
          Rs {current_price}
        </p>
        <p className="hidden lg:flex text-xl font-bold leading-7 line-through text-gray-500">
          Rs {before_price}
        </p>
      </div>
      <div
        onClick={handleDelete}
        className="cursor-pointer lg:col-span-1 flex items-center justify-center"
      >
        <DeleteIcon />
      </div>
    </div>
  );
};

export default CartItem;
