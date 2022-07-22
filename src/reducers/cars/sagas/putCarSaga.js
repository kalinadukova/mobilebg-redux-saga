import { put, takeLatest, call } from "redux-saga/effects";
import { putCarsFailed, putCarsSuccess } from "../cars.actions";
import { CAR_TYPES } from "../cars.types";
import { updateCar } from "../../../utils/requests";

function* updateCarAsync({ payload: { newData, userId, token, cars } }) {
  try {
    const newCarData = yield call(updateCar, newData, userId, token);
    yield put(putCarsSuccess(newCarData, cars));
  } catch (error) {
    yield put(putCarsFailed(error));
  }
}

export function* onPutCar() {
  yield takeLatest(CAR_TYPES.CAR_PUT_START, updateCarAsync);
}
