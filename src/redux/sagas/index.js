import { all } from "@redux-saga/core/effects";
import randomPersonSaga from "./randomPersonSaga";

export default function* rootSaga() {
  yield all([randomPersonSaga()]);
}
