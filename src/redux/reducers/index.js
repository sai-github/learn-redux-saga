import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import randomPersonReducer from "./randomPersonReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  randomPerson: randomPersonReducer,
});

export default rootReducer;
