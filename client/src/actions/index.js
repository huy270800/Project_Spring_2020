export const sign_in = (name, pw) => {
  return {
    type: "SIGN_IN",
    payload: { username: name, password: pw }
  };
};

export const sign_out = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product
  };
};

export const updateCart = (id_cart, value) => {
  return {
    type: "UPDATE_CART",
    payload: { id_cart, value }
  };
};

export const deleteCart = (id_cart) => {
  return {
    type: "DELETE_CART",
    payload: { id_cart }
  };
};

export const increase = (id_cart) => {
  return {
    type: "INCREASE",
    payload: { id_cart }
  };
};

export const decrease = (id_cart) => {
  return {
    type: "DECREASE",
    payload: { id_cart }
  };
};

