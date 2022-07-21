import { all, fork } from "redux-saga/effects";
import { userSaga } from "../reducers/user/sagas/userSaga";
// Saga
// **** TODO: IMPORT SAGA FILES
// API
// **** TODO: IMPORT API
/** Root saga.
 * @return {Object} - return store
 */
function* rootSaga() {
  yield all([userSaga()]);
}

export default rootSaga;
