import {
  createActionWithPayload,
  createActionWithoutPayload,
} from "../../utils/reducers";
import { USER_TYPES } from "./user.types";

export const signInStart = (userData) =>
  createActionWithPayload(USER_TYPES.SIGN_IN_START, userData);

export const signInSuccess = (userInfo) =>
  createActionWithPayload(USER_TYPES.SIGN_IN_SUCCESS, userInfo);

export const signInFail = (error) =>
  createActionWithPayload(USER_TYPES.SIGN_IN_FAILED, error);

// export const signUpStart = () =>
//   createActionWithoutPayload(USER_TYPES.SIGN_UP_START);

export const signUpSuccess = () =>
  createActionWithoutPayload(USER_TYPES.SIGN_UP_SUCCESS);

export const signUpFail = () =>
  createActionWithoutPayload(USER_TYPES.SIGN_UP_FAILED);

export const signUpAction = (userInfo) =>
  createActionWithPayload(USER_TYPES.SIGN_UP, userInfo);

export const logoutAction = () => createActionWithoutPayload(USER_TYPES.lOGOUT);
