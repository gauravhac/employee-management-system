import { combineReducers } from "redux";
import EmployeeReducer from "./EmployeeReducer";
import LoginReducer from "./LoginReducer";

export default combineReducers({
  employee: EmployeeReducer,
  login: LoginReducer,
});
