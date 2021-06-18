import { ADD_TODOTASK, REMOVE_TODOTASK } from "./actionsTypes";

export const addToDoTask = (task) => ({
  type: ADD_TODOTASK,
  task,
});

export const removeToDoTask = (id) => ({
  type: REMOVE_TODOTASK,
  id,
});
