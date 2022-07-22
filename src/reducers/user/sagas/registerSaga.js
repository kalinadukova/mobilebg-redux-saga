import { put, takeLatest, call } from "redux-saga/effects";
import { signUpFail, signUpSuccess } from "../user.actions";
import { register } from "../../../utils/requests";
import { USER_TYPES } from "../user.types";

function* registerAsync({ payload: userData }) {
  try {
    console.log("here1");
    const userInfo = yield call(register, userData);
    console.log("here2");
    yield put(signUpSuccess(userInfo));
  } catch (error) {
    yield put(signUpFail(error));
  }
}

export function* onRegisterUserStart() {
  yield takeLatest(USER_TYPES.SIGN_UP_START, registerAsync);
}
