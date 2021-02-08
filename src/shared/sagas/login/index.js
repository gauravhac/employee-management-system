import { takeLatest, call, put } from "redux-saga/effects";
import axiosInstance from "../../../utils/axiosHelper";

function loginApi(username) {
  return axiosInstance.service.get(`/api/login/${username}`);
}

function* loginAsync(action) {
  try {
    const { data } = yield call(loginApi, action.username);
    localStorage.setItem(`__token__`, data);
    window.location.href = "/";
  } catch (e) {
    yield put({ type: "UPDATE_UNSUCCESSFULL_LOGIN" });
  }
}

export function* loginWatcherSaga() {
  yield takeLatest("LOGIN_REQUEST", loginAsync);
}
