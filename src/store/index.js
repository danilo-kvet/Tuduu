import doneTaskReducer from "./modules/doneTasks/reducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import toDoTaskReducer from "./modules/toDoTasks/reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  doneTasks: doneTaskReducer,
  toDoTasks: toDoTaskReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
