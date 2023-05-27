import { ADD_TODO, DELETE_TODO} from './actions';

const inState = {
  todos: []
};

export default function reducer (state = inState, action) {
    switch(action.type) {
        case ADD_TODO:
          return Object.assign({}, state, {
            todos: [...state.todos, { id: Date.now(), text: action.payload.text, completed: false }]
          });

        case DELETE_TODO:
            return Object.assign({}, state, {
              todos: state.todos.filter(todo => todo.id !== action.payload.id)
            });

       default:
          return state;
      }
    };


