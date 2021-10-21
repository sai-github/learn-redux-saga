import * as types from "../types";

const initialState = {
  name: {
    first: "Fistname",
    last: "Lastname",
  },
  email: "firstname.lastname@example.com",
};

const randomPersonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PERSON_SUCCESS:
      return { ...action.person };
    default:
      return state;
  }
};

export default randomPersonReducer;
