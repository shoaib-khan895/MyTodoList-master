import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from '../src/components/actionTypes';

let nextTodoId = 0;

export const addTodo = task => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    task,
  },
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const updateTodo = (id,text) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    text,
  },
});
