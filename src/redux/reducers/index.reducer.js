import { combineReducers } from "redux";
import userReducer from "./userReducer/user.reducer";
import searchReducer from "./searchReducer/searchReducer";
const rootReducer = combineReducers({
  userReducer,
  searchReducer,
});

export default rootReducer;
