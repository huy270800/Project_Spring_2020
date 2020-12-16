const totalPrice = (sum = [], action) => {
  switch (action.type) {
    case "TOTAL_PRICE": {
      return action.payload;
    }
    default:
      return sum;
  }
};
export default totalPrice;
