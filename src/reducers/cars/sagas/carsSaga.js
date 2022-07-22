import { onGetCarsSaga } from "./getCarsSaga";
import { all, call } from "redux-saga/effects";

export function* carsSaga() {
  yield all([call(onGetCarsSaga)]);
}
