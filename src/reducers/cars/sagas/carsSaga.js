import { onGetCarsStart } from "./getCarsSaga";
import { onPostCar } from "./postCarSaga";
import { onDeleteCar } from "./deleteCarSaga";
import { onPutCar } from "./putCarSaga";
import { all, call } from "redux-saga/effects";

export function* carsSaga() {
  yield all([
    call(onGetCarsStart),
    call(onPostCar),
    call(onDeleteCar),
    call(onPutCar),
  ]);
}
