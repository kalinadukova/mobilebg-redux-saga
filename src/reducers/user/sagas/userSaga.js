import { call, all } from "redux-saga/effects";
import { onLoginUserStart } from "./loginSaga";
import { onRegisterUserStart } from "./registerSaga";

export function* userSaga() {
  yield all([call(onLoginUserStart), call(onRegisterUserStart)]);
}
