import { put, takeLatest, call } from "redux-saga/effects";

import * as actions from "../user.actions";
import { login } from "../../../utils/requests";
import { userTypes } from "../user.types";

export function* onLoginAsync({ payload: userData }) {
  console.log("HERE2");
  try {
    const userInfo = yield call(login, userData);
    yield put(actions.signInSuccess(userInfo));
  } catch (error) {
    yield put(actions.signInFail(error.message));
  }
}

export function* onLoginUserSaga() {
  console.log("onLoginUserSaga");
  yield takeLatest(userTypes.SIGN_IN_START, onLoginAsync);
}
