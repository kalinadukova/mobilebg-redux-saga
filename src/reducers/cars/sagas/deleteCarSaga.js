import { put, takeLatest, call } from "redux-saga/effects";
import { CAR_TYPES } from "../cars.types";
import { deleteCarFailed, deleteCarSuccess } from "../cars.actions";
import { deleteCar } from "../../../utils/requests";

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
