import React, { useRef } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/EmptyAnim";
const Empty = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    speed: 1,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="w-54">
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  );
};

export default Empty;
