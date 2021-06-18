import { ADD_DONETASK, REMOVE_DONETASK } from "./actionsTypes";
const defaultStore = JSON.parse(localStorage.getItem("doneTasks")) || [];

const doneTaskReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case ADD_DONETASK:
      const { task } = action;
      return [...state, task];
    case REMOVE_DONETASK:
      const { id } = action;
      return state.filter((task) => task.id !== id);
    default:
      return state;
  }
};

export default doneTaskReducer;
