const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart":
      let newItem = action.item
      let newCart = [...state,newItem];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    case "LoadCart":
      let localCart = JSON.parse(localStorage.getItem("cart"));
      if (localCart) {
        return localCart;
      } else return state;
    case "Delete":
        let deleteCart = state.filter((object) => object.id !== action.id);
        localStorage.setItem("cart", JSON.stringify(deleteCart));
        return deleteCart
    case "DeleteAll":
        localStorage.setItem("cart", JSON.stringify([]));
        return []
    default:
      return state;
  }
};

export default cartReducer;
