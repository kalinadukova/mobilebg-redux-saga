import { call, put, takeLatest } from "redux-saga/effects";
import { CAR_TYPES } from "../../reducers/cars/cars.types";
import {
  getCarsSuccess,
  getCarsFailed,
} from "../../reducers/cars/cars.actions";
import { getCarsArray } from "../../utils/requests";

function* onGetCarsAsync() {
  try {
    const cars = yield call(getCarsArray);
    yield put(getCarsSuccess(cars));
  } catch (error) {
    yield put(getCarsFailed(error));
  }
}

export function* onGetCarsStart() {
  yield takeLatest(CAR_TYPES.CAR_FETCHING_START, onGetCarsAsync);
}
