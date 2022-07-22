import { combineReducers } from "redux";
import redirectReducer from "./redirectReducer";
import { userReducer } from "./user/user.reducer";
import { carsReducer } from "./cars/cars.reducer";

// TODO:Import reducers

/** Combine all reducers
 * @returns {Object} store
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    // TODO: set reducers
    redirect: redirectReducer,
    user: userReducer,
    cars: carsReducer,
  });
  return rootReducer;
}
