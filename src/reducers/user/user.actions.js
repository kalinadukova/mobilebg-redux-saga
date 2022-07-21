import {
  createActionWithPayload,
  createActionWithoutPayload,
} from "../../utils/reducers";
import { userTypes } from "./user.types";

export const signInStart = (userData) =>
  createActionWithPayload(userTypes.SIGN_IN_START, userData);

export const signInSuccess = (userInfo) =>
  createActionWithPayload(userTypes.SIGN_IN_SUCCESS, userInfo);

export const signInFail = (error) =>
  createActionWithPayload(userTypes.SIGN_IN_FAILED, error);

// export const signUpStart = () =>
//   createActionWithoutPayload(userTypes.SIGN_UP_START);

export const signUpSuccess = () =>
  createActionWithoutPayload(userTypes.SIGN_UP_SUCCESS);

export const signUpFail = () =>
  createActionWithoutPayload(userTypes.SIGN_UP_FAILED);

export const signUpAction = (userInfo) =>
  createActionWithPayload(userTypes.SIGN_UP, userInfo);

export const logoutAction = () => createActionWithoutPayload(userTypes.lOGOUT);
