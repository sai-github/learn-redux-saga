import { call, put, takeEvery } from "redux-saga/effects";
import api from "../../api/api";

import * as types from "../types";

function getRandomPersonApi() {
  return api
    .get()
    .then((res) => res.data.results[0])
    .catch((err) => console.error(err));
}

function* fetchRandomPerson() {
  try {
    const personResponse = yield call(getRandomPersonApi);
    yield put({
      type: types.GET_PERSON_SUCCESS,
      person: {
        name: {
          first: personResponse.name.first,
          last: personResponse.name.last,
        },
        email: personResponse.email,
      },
    });
  } catch (err) {
    yield put({ type: types.GET_PERSON_FAIL });
  }
}

function* randomPersonSaga() {
  yield takeEvery(types.GET_PERSON, fetchRandomPerson);
}

export default randomPersonSaga;
