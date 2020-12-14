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
      console.log("action");
      console.log(action.payload);
      console.log(state.cart);
      var sameToppings;
      var index;
      if (
        available_product_index >= 0 &&
        action.payload.size === new_cart[available_product_index].size
      ) {
        for (var i = 0; i <= state.cart.length - 1; i++) {
          console.log(state.cart[i].toppings);
          if (
            arraysEqual(state.cart[i].toppings, action.payload.toppings) ===
            true
          ) {
            console.log("true");
            sameToppings = true;
            index = i;
            console.log(i);
            break;
          } else {
            console.log("false");
            sameToppings = false;
            index = i;
            console.log(i);
          }
        }
        if (sameToppings === true) {
          new_cart[index].quantity =
            new_cart[index].quantity + action.payload.quantity;

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
    case "INCREASE": {
      const find_product = state.cart.findIndex((product) => {
        return product.id_cart == action.payload.id_cart;
      });
      const new_cart = [...state.cart];
      if (find_product >= 0) {
        new_cart[find_product].quantity++;
      } else {
        console.log("Product not found");
      }
      return {
        ...state,
        cart: new_cart
      };
    }
    case "DECREASE": {
      const find_product = state.cart.findIndex((product) => {
        return product.id_cart == action.payload.id_cart;
      });
      const new_cart = [...state.cart];
      if (find_product >= 0 && new_cart[find_product].quantity >= 1) {
        new_cart[find_product].quantity--;
      } else {
        console.log("Product not found");
      }
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

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
