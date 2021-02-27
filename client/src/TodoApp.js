import React, { useState} from "react"
import Header from "./components/Header"
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

import './App.css';

export default function TodoApp() {
  const [todos, setTodos] = useState({
    name: "",
    completed: false
  })
  const [unCheckedlist, setUncheckedList] = useState([])
  const [checkedlist, setCheckedList] = useState([])

  const handleInputChange = event => {
    console.log('handle input', event.target)
    const { value } = event.target
    setTodos(value)
    console.log("I am a todo", todos)
   
    
  }
  const handleFormSubmit = event => {
    console.log('click')
     //post route would go here 

  }
  const dataFetch = () => {
    //fetch with axios or fetch 
  }
  useEffect(() => {

  },[])   

  
  return (
    <div className="Container">
       <Header   />
       <TodoForm 
       inputFunction={handleInputChange}
       submitFunction={handleFormSubmit} />
       <TodoList />

    </div>
  );
}

 
