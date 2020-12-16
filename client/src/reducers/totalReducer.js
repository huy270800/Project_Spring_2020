const totalPrice = (sum = [], action) => {
  switch (action.type) {
    case "TOTAL_PRICE": {
      //   var totalPrice = action.payload.totalPrice;
      //   for (var i = 0; i <= state.cart.length;i++)
      //   return {
      //     ...state,
      //     cart: {
      //       ...state.cart[i],
      //       totalPrice
      //     }
      //   };
      // }
      return action.payload;
    }
    default:
      return sum;
  }
};
export default totalPrice;
