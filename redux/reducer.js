import {ADD_TODO, DELETE_TODO} from '../src/components/actionTypes';

const initialState = {
  todo_list: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const {id, task} = action.payload;
      return {
        ...state,
        todo_list: [...state.todo_list, {id, task}],
      };
    }
    case DELETE_TODO: {
      const {id} = action.payload;
      return {
        ...state,
        todo_list: state.todo_list.filter(todo => todo.id != id),
      };
    }
    case DELETE_TODO: {
      const index = state.todo_list.findIndex(todo => todo.id !== action.payload); 
      const newArray = [...state.todo_list]; 
      newArray[index].completed = true;
      return {
        ...state, 
        todos: newArray, 
      };
    }
    default:
      return state;
  }
}