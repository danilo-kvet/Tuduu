import { ADD_TODOTASK, REMOVE_TODOTASK } from "./actionsTypes";
const defaultStore = JSON.parse(localStorage.getItem("toDoTasks")) || [];

const toDoTaskReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case ADD_TODOTASK:
      const { task } = action;
      return [...state, task];
    case REMOVE_TODOTASK:
      const { id } = action;
      return state.filter((task) => task.id !== id);
    default:
      return state;
  }
};

export default toDoTaskReducer;
