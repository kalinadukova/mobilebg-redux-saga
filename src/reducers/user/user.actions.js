import {
  createActionWithPayload,
  createActionWithoutPayload,
} from "../../utils/reducers";
import { USER_TYPES } from "./user.types";

//login
export const signInStart = (userData) =>
  createActionWithPayload(USER_TYPES.SIGN_IN_START, userData);

export const signInSuccess = (userInfo) =>
  createActionWithPayload(USER_TYPES.SIGN_IN_SUCCESS, userInfo);

export const signInFail = (error) =>
  createActionWithPayload(USER_TYPES.SIGN_IN_FAILED, error);

//register
export const signUpStart = (userData) =>
  createActionWithPayload(USER_TYPES.SIGN_UP_START, userData);

export const signUpSuccess = (userInfo) =>
  createActionWithPayload(USER_TYPES.SIGN_UP_SUCCESS, userInfo);

export const signUpFail = (error) =>
  createActionWithPayload(USER_TYPES.SIGN_UP_FAILED, error);

//logout
export const logoutAction = () => createActionWithoutPayload(USER_TYPES.lOGOUT);
