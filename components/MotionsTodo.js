import { useSelector, useDispatch as useReference } from 'react-redux';
import { addTodo, deleteTodo} from '../redux/actions';
import { getTodos} from '../redux/selectors';
import { useState } from 'react';


export default function MotionsTodo () {
  const reference = useReference();
  const todos = useSelector(getTodos);
  const [context, setContext] = useState('');

  const newAddTodo = (event) => {
    event.preventDefault();
    if (!context) return;
    reference(addTodo(context));
    setContext('');
  };

  const DeleteElem = (id) => {
    reference(deleteTodo(id));
  };


  return ( <div>
      <form onSubmit={newAddTodo}>
        <input type="text" value={context} onChange={(event) => setContext(event.target.value)}  placeholder="Enter new todo"/>
        <button className='submit'>Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
           <span>{todo.text}</span>
            <button className='delete' onClick={() => DeleteElem(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
     </div>
    );
};

