import { put, takeLatest, call } from "redux-saga/effects";
import { signInFail, signInSuccess } from "../../reducers/user/user.actions";
import { login } from "../../utils/requests";
import { USER_TYPES } from "../../reducers/user/user.types";

function* onLoginAsync({ payload: { username, password } }) {
  console.log(username);
  console.log(password);
  try {
    const userInfo = yield call(login, { username, password });
    yield put(signInSuccess(userInfo));
  } catch (error) {
    console.log(error);
    yield put(signInFail(error));
  }
}

export function* onLoginUserStart() {
  yield takeLatest(USER_TYPES.SIGN_IN_START, onLoginAsync);
}
