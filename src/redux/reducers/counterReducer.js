import * as types from "../types";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCR:
      return { count: state.count + 1 };
    case types.DECR:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
