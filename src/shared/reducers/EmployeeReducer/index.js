const initialState = {
  list: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "UPDATE_EMPLOYEE_LIST":
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}
