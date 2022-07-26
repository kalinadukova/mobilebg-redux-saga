import { all } from "redux-saga/effects";
import { carsSaga } from "./carsSaga/carsSaga";
import { userSaga } from "./userSaga/userSaga";
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
