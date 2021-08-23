import React from "react";
import Navbar from "./Navbar";
const Layout = (props) => {
  return (
    <div className="Layout px-5">
      <Navbar />
      <div className="main">{props.children}</div>
    </div>
  );
};

export default Layout;
