import React, { createContext, useReducer } from "react";
import cartReducer from "./cartReducer";
export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [Cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider
      value={{
        Cart,
        dispatch
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
