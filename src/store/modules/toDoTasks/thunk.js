import { addToDoTask, removeToDoTask } from "./actions";

export const addToDoTaskThunk = (data) => (dispatch) => {
  const toDoTasksList = JSON.parse(localStorage.getItem("toDoTasks")) || [];
  toDoTasksList.push(data);
  localStorage.setItem("toDoTasks", JSON.stringify(toDoTasksList));
  dispatch(addToDoTask(data));
};

export const removeToDoTaskThunk = (id) => (dispatch) => {
  const toDoTasksList = JSON.parse(localStorage.getItem("toDoTasks"));
  const newList = toDoTasksList.filter((a) => a.id !== id);
  localStorage.setItem("toDoTasks", JSON.stringify(newList));
  dispatch(removeToDoTask(id));
};
