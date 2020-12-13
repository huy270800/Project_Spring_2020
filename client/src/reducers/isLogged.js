const loggedReducer = (state = { username: "", password: "" }, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return action.payload;
    case "SIGN_OUT":
      return { username: "", password: "" };
    default:
      return state;
  }
};
export default loggedReducer;
