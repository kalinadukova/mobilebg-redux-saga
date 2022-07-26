import { put, takeLatest, call } from "redux-saga/effects";
import { CAR_TYPES } from "../../reducers/cars/cars.types";
import {
  deleteCarFailed,
  deleteCarSuccess,
} from "../../reducers/cars/cars.actions";
import { deleteCar } from "../../utils/requests";

function* deleteCarAsync({ payload: { carId, userId, token, cars } }) {
  try {
    yield call(deleteCar, carId, userId, token);
    yield put(deleteCarSuccess(carId, cars));
  } catch (error) {
    yield put(deleteCarFailed(error));
  }
}

export function* onDeleteCar() {
  yield takeLatest(CAR_TYPES.CAR_DELETE_START, deleteCarAsync);
}
