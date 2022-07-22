import { put, takeLatest, call } from "redux-saga/effects";

import * as actions from "../user.actions";
import { login } from "../../../utils/requests";
import { USER_TYPES } from "../user.types";

function* onLoginAsync({ payload: userData }) {
  try {
    const userInfo = yield call(login, userData);
    yield put(actions.signInSuccess(userInfo));
  } catch (error) {
    yield put(actions.signInFail(error.message));
  }
}

export function* onLoginUserSaga() {
  yield takeLatest(USER_TYPES.SIGN_IN_START, onLoginAsync);
}
