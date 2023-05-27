
export const ADD_TODO  = 'ADD_TODO';
export const DELETE_TODO  = 'DELETE_TODO';

export const addTodo = context => ({
  type: ADD_TODO,
  payload: { context }
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id }
});





