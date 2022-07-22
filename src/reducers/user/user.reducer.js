import { USER_TYPES } from "./user.types";

const initialState = {
  isLoggedIn: false,
  loading: false,
  currentUser: {
    user: null,
    jwtToken: "",
  },
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_TYPES.SIGN_UP_START:
    case USER_TYPES.SIGN_IN_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case USER_TYPES.SIGN_UP_SUCCESS:
    case USER_TYPES.SIGN_IN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        currentUser: payload,
      };
    }
    case USER_TYPES.SIGN_UP_FAILED:
    case USER_TYPES.SIGN_IN_FAILED: {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    }
    case USER_TYPES.lOGOUT: {
      return {
        ...state,
        currentUser: {
          user: null,
          jwtToken: "",
        },
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};
