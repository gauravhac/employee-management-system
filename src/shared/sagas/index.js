import { all } from "redux-saga/effects";
import { loginWatcherSaga } from "./login";
import { employeeWatcherSaga } from "./Employee";

export default function* rootSaga() {
  yield all([loginWatcherSaga(), employeeWatcherSaga()]);
}
