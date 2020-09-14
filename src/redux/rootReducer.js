import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { tableReducer } from "./tableReducer";

export const rootReducer = combineReducers({
  table: tableReducer,
  app: appReducer,
});
