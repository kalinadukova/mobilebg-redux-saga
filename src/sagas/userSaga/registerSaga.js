import { put, takeLatest, call } from "redux-saga/effects";
import { signUpFail, signUpSuccess } from "../../reducers/user/user.actions";
import { register } from "../../utils/requests";
import { USER_TYPES } from "../../reducers/user/user.types";

function* registerAsync({ payload: userData }) {
  try {
    const userInfo = yield call(register, userData);
    yield put(signUpSuccess(userInfo));
  } catch (error) {
    yield put(signUpFail(error));
  }
}

export function* onRegisterUserStart() {
  yield takeLatest(USER_TYPES.SIGN_UP_START, registerAsync);
}
