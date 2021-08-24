import React, { useRef } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/Check";
import { Link, useHistory } from "react-router-dom";
const OrderAnimation = () => {
  let history = useHistory();
  const defaultOptions = {
    loop: false,
    autoplay: true,
    speed: 0.5,
    animationData: animationData,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="fixed left-0 h-5/6 z-99 w-full flex-grow flex items-center justify-center">
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        eventListeners={[
          {
            eventName: "complete",
            callback: () => history.push(`/`)
          }
        ]}
        onComplete={() => {
          console.log("complete");
        }}
      />
    </div>
  );
};

export default OrderAnimation;
