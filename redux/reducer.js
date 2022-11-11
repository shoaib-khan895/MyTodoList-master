import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from '../src/components/actionTypes';

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
    case UPDATE_TODO: {
      const {id, text} = action.payload;
      
      const newText = todo_list.splice(id, text);
      console.log(newText);

      return {
        ...state,
        todo_list: [todo_list.splice(id, text)],
      };
    }
    default:
      return state;
  }
}
