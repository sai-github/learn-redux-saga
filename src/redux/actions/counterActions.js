import * as types from "../types";

export const incr = () => ({
  type: types.INCR,
});

export const decr = () => ({
  type: types.DECR,
});
