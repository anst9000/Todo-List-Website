import React,{useState,useEffect} from 'react';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Form from './components/Form';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  const addNewTodo = (text) => {
    const newTodo = {
      text,
      completed: false,
      id: Math.random() * 1000
    }

    setTodos([...todos, newTodo])
  }

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  const filterHandler = () => {
    let newTodos = []

    if (status === 'completed') {
      newTodos = todos.filter((todo) => todo.completed === true)
    } else if (status === 'uncompleted') {
      newTodos = todos.filter((todo) => todo.completed === false)
    } else {
      newTodos = todos
    }

    setFilteredTodos(newTodos)
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos',JSON.stringify([]));
    } else {
      let todoLocal= JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <Header />
      <Form
        setStatus={setStatus}
        addNewTodo={addNewTodo}
      />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
