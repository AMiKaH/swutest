import { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])

  function handleAddTodo(e){
    const name = todoNameRef.current.value;

    if (name === ''){
      return;
    }
    setTodos(prevTodos => {
      return [...prevTodos, {id:uuidv4(), name, complete: false}]
    })
    todoNameRef.current.value = null;
  }

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleClearTodos() {
    const incomepleteTodos = [...todos].filter(todo => !todo.complete);
    setTodos(incomepleteTodos);
  }

  function add(a, b) {
    return a + b;
  }

  
  function subtract(a, b) {
    return a - b;
  }

  
  function multiply(a, b) {
    return a * b;
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/> 
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} Left to do</div>
    </>

  );
}

export default App;
