import { FaCheck, FaCheckDouble, FaTrash } from "react-icons/fa";

const Todo = ({todo, completeHandler, deleteHandler}) => {
  const toggleComplete = todo.completed ? 'toggle-complete-btn' : 'complete-btn'

  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed?"completed":''}`} >{todo.text}</li>
      <button onClick={() => completeHandler(todo.id)} className={toggleComplete}>
        {todo.completed ? <FaCheckDouble /> : <FaCheck />}
      </button>
      <button onClick={() => deleteHandler(todo.id)} className='trash-btn'><FaTrash /></button>
    </div>
  );
};

export default Todo;