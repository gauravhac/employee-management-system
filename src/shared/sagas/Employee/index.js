import { takeLatest, call, put } from "redux-saga/effects";
import axiosInstance from "../../../utils/axiosHelper";

function employeeListApi() {
  return axiosInstance.service.get(`/api/employee/getlist`);
}

function* loadEmployeesAsync(action) {
  try {
    const { data } = yield call(employeeListApi);
    yield put({ type: "UPDATE_EMPLOYEE_LIST", payload: data });
  } catch (e) {
    console.log(e);
  }
}

export function* employeeWatcherSaga() {
  yield takeLatest("EMPLOYEE_LIST_REQUEST", loadEmployeesAsync);
}
