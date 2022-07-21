import { call, all } from "redux-saga/effects";
import { onLoginUserSaga } from "./loginSaga";

export function* userSaga() {
  yield all[call(onLoginUserSaga)];
}
