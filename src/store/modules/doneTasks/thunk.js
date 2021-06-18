import { addDoneTask, removeDoneTask } from "./actions";

export const addDoneTaskThunk = (data) => (dispatch) => {
  const doneTasksList = JSON.parse(localStorage.getItem("doneTasks")) || [];
  doneTasksList.push(data);
  localStorage.setItem("doneTasks", JSON.stringify(doneTasksList));
  dispatch(addDoneTask(data));
};

export const removeDoneTaskThunk = (id) => (dispatch) => {
  const doneTasksList = JSON.parse(localStorage.getItem("doneTasks"));
  const newList = doneTasksList.filter((a) => a.id !== id);
  localStorage.setItem("doneTasks", JSON.stringify(newList));
  dispatch(removeDoneTask(id));
};
