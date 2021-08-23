import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CartContextProvider from "./Cartcontext";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <CartContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartContextProvider>
  </BrowserRouter>,
  rootElement
);
