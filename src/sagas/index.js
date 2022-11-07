import { all, spawn } from "redux-saga/effects";
import signUpSagas from "../pages/signUp/saga/signupSaga";

export default function* rootSaga() {
  yield all([spawn(signUpSagas)]);
}
