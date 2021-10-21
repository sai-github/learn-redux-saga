import * as types from "../types";

export const getPerson = () => ({ type: types.GET_PERSON });
export const getPersonSuccess = (person) => ({
  type: types.GET_PERSON_SUCCESS,
  person,
});
export const getPersonFail = () => ({ type: types.GET_PERSON_FAIL });
