import { combineReducers } from "redux";
import { reducer as users } from "./ducks/users";

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
