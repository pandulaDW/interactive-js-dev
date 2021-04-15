import { combineReducers } from "redux";
import repositoryReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repository: repositoryReducer,
});

export default reducers;
