import { createStore } from 'redux';
import reducer from './reducer';

const inState = {
  todos: []
};

const store = createStore(reducer, inState);
export default store;