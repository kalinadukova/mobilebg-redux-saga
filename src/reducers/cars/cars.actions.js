import { CAR_TYPES } from "./cars.types";

import {
  createActionWithPayload,
  createActionWithoutPayload,
} from "../../utils/reducers";

const addCarArray = (newCarData, cars) => {
  cars.push(newCarData);
  return [...cars];
};

const updateCarArray = (newCarData, cars) => {
  const carIndex = cars.findIndex((car) => car.id === newCarData.id);

  cars.splice(carIndex, 1, newCarData);

  return [...cars];
};

//get request actions
export const getCarsStart = () =>
  createActionWithoutPayload(CAR_TYPES.CAR_FETCHING_START);

export const getCarsSuccess = (carsArray) =>
  createActionWithPayload(CAR_TYPES.CAR_FETCHING_SUCCESS, carsArray);

export const getCarsFailed = (error) =>
  createActionWithPayload(CAR_TYPES.CAR_FETCHING_FAILED, error);

//post request actions
export const postCarsStart = (requestData, token, cars) =>
  createActionWithPayload(CAR_TYPES.CAR_POST_START, {
    requestData,
    token,
    cars,
  });

export const postCarsSuccess = (newCarData, cars) =>
  createActionWithPayload(
    CAR_TYPES.CAR_POST_SUCCESS,
    addCarArray(newCarData, cars)
  );

export const postCarsFailed = (error) =>
  createActionWithPayload(CAR_TYPES.CAR_POST_FAILED, error);

//put request actions
export const putCarsStart = (newData, userId, token, cars) =>
  createActionWithPayload(CAR_TYPES.CAR_PUT_START, {
    newData,
    userId,
    token,
    cars,
  });

export const putCarsSuccess = (newCarData, cars) =>
  createActionWithPayload(
    CAR_TYPES.CAR_PUT_SUCCESS,
    updateCarArray(newCarData, cars)
  );

export const putCarsFailed = (error) =>
  createActionWithPayload(CAR_TYPES.CAR_PUT_FAILED, error);

//delete request actions
export const deleteCarStart = (carId, userId, token, cars) =>
  createActionWithPayload(CAR_TYPES.CAR_DELETE_START, {
    carId,
    userId,
    token,
    cars,
  });

export const deleteCarSuccess = (carId, cars) =>
  createActionWithPayload(
    CAR_TYPES.CAR_DELETE_SUCCESS,
    cars.filter((car) => car.id !== carId)
  );

export const deleteCarFailed = (error) =>
  createActionWithPayload(CAR_TYPES.CAR_DELETE_FAILED, error);
