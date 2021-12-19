import { useState } from "react"
import { FaPlusSquare, FaAngleDown } from "react-icons/fa";

const Form = ({setStatus, addNewTodo}) => {
  const [inputText, setInputText] = useState('')

  const handleSubmit = e => {
    e.preventDefault();

    if (inputText === "") return

    addNewTodo(inputText)
    setInputText('')
  }

  return (
  <form onSubmit={handleSubmit}>
    <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} className="todo-input" />
    <button className="todo-button" type="submit">
      <FaPlusSquare />
    </button>

      <select onChange={e => setStatus(e.target.value)} name="todos" className="classic">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
  </form>
  )
}

export default Form;