import { USER_TYPES } from "./user.types";

const initialState = {
  loading: false,
  currentUser: {
    user: null,
    jwtToken: "",
  },
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_TYPES.SIGN_IN_START: {
      return {
        loading: true,
        ...state,
      };
    }
    case USER_TYPES.SIGN_IN_SUCCESS: {
      return {
        loading: false,
        ...state,
        currentUser: payload,
      };
    }
    case USER_TYPES.SIGN_IN_FAILED: {
      return {
        loading: false,
        ...state,
        error: payload,
      };
    }
    case USER_TYPES.SIGN_UP_START: {
      return {
        loading: true,
        ...state,
      };
    }
    case USER_TYPES.SIGN_UP_SUCCESS: {
      return {
        loading: false,
        ...state,
        currentUser: payload,
      };
    }
    case USER_TYPES.SIGN_UP_FAILED: {
      return {
        loading: false,
        ...state,
        error: payload,
      };
    }
    case USER_TYPES.lOGOUT: {
      return {
        ...state,
        currentUser: {
          user: null,
          jwtToken: "",
        },
      };
    }
    default:
      return state;
  }
};
