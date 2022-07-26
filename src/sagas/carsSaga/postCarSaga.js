import { call, put, takeLatest } from "redux-saga/effects";
import { CAR_TYPES } from "../../reducers/cars/cars.types";
import {
  postCarsSuccess,
  postCarsFailed,
} from "../../reducers/cars/cars.actions";
import { addCar } from "../../utils/requests";

function* addCarAsync({ payload: { requestData, token, cars } }) {
  try {
    const newCarData = yield call(addCar, requestData, token);
    yield put(postCarsSuccess(newCarData, cars));
  } catch (error) {
    yield put(postCarsFailed(error));
  }
}

export function* onPostCar() {
  yield takeLatest(CAR_TYPES.CAR_POST_START, addCarAsync);
}
