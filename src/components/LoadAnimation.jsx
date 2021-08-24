import React from "react";
import { ReactComponent as LoadingIcon } from "../assets/Loading.svg";
const LoadAnimation = () => {
  return (
    <div className="fixed left-0 h-5/6 z-99 w-full flex-grow flex items-center justify-center">
      <LoadingIcon className="w-54" />
    </div>
  );
};

export default LoadAnimation;
