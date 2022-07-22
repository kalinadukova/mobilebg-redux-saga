import { all } from "redux-saga/effects";
import { userSaga } from "../reducers/user/sagas/userSaga";
import { carsSaga } from "../reducers/cars/sagas/carsSaga";
// Saga
// **** TODO: IMPORT SAGA FILES
// API
// **** TODO: IMPORT API
/** Root saga.
 * @return {Object} - return store
 */
function* rootSaga() {
  yield all([userSaga(), carsSaga()]);
}

export default rootSaga;
