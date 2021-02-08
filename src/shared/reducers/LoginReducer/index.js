const initialState = {
  isLoginUnsuccessfull: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "UPDATE_UNSUCCESSFULL_LOGIN":
      return {
        ...state,
        isLoginUnsuccessfull: true,
      };
    default:
      return state;
  }
}
