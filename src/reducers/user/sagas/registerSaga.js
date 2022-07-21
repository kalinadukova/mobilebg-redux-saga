import { put, take, call } from "redux-saga/effects";
import * as actions from "../user.actions";
import { register } from "../../../utils/requests";

function* registerAsync(userData) {
  try {
    const userInfo = yield call(register, userData);
    put(actions.signUpSuccess(userInfo));
  } catch (error) {
    put(actions.signUpFail(error.message));
  }
}

export function* watchRegister(userData) {
  take(registerAsync, userData);
}
