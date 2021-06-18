import { ADD_DONETASK, REMOVE_DONETASK } from "./actionsTypes";

export const addDoneTask = (task) => ({
  type: ADD_DONETASK,
  task,
});

export const removeDoneTask = (id) => ({
  type: REMOVE_DONETASK,
  id,
});
