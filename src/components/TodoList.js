import Todo from './Todo'

const TodoList = ({setTodos, todos, filteredTodos}) => {
  const deleteHandler= (id) =>{
    setTodos(todos.filter((el) => el.id !== id))
  }

  const completeHandler = (id) =>{
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return {...item, completed: !item.completed}
      }

      return item;
    })

    setTodos(newTodos)
  }

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteHandler={deleteHandler}
            completeHandler={completeHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;