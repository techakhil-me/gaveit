import React from "react";
import Banner_two from "../assets/Banner_two.png";
import { Link } from "react-router-dom";

const MedBanner = () => {
  return (
    <Link
      to="/search/bottles"
      className="cursor-pointer container relative mx-auto px-5 bg-green-100 flex justify-evenly items-center rounded-lg overflow-hidden"
    >
      <img src={Banner_two} alt="Logo" />
    </Link>
  );
};

export default MedBanner;
