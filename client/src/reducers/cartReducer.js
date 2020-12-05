const initState = {
  cart: []
};
// pic = product in cart
const cart = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const available_product_index = state.cart.findIndex((pic) => {
        return pic.id_product === action.payload.id_product;
      });
      const new_cart = [...state.cart];
      if (
        available_product_index >= 0 &&
        action.payload.size === new_cart[available_product_index].size
      ) {
        new_cart[available_product_index].quantity =
          new_cart[available_product_index].quantity + action.payload.quantity;

        return {
          ...state,
          cart: new_cart
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload]
        };
      }
    }
    case "UPDATE_CART": {
      const update_product_index = state.cart.findIndex((pic) => {
        return pic.id_cart === action.payload.id_cart;
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
        return pic.id_cart !== action.payload.id_cart;
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
export default cart;
