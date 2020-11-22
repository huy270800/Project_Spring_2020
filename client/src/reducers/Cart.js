const initState = {
  cart: []
};
const cart = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state
      };
    }
    case "UPDATE_CART": {
      const update_product_index = state.cart.findIndex((pic) => {
        return pic.id_cart == action.payload.id_cart;
      });
      const new_cart = [...state.cart];
      new_cart[update_product_index].quantity = Number(action.payload.value);
      return {
        ...state,
        cart: new_cart
      };
    }
    case "DELETE_CART": {
      const new_cart = state.cart.filter((pic) => {
        return pic.id_cart !== action.payload;
      });
      return {
        ...state,
        cart: new_cart
      };
    }
    default:
      return state;
  }
};
