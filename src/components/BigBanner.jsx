import React from "react";
import { ReactComponent as Banner } from "../assets/Banner_one.svg";
import { Link } from "react-router-dom";
const BigBanner = () => {
  return (
    <Link
      to="/search/headphones"
      className="cursor-pointer container relative mx-auto p-5 bg-gray-100 flex justify-evenly items-center rounded-lg overflow-hidden"
    >
      <Banner />
    </Link>
  );
};

export default BigBanner;
