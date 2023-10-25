import React, { useState } from "react";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Task 1", description: "Description of Task 1" },
    { id: 2, title: "Task 2", description: "Description of Task 2" },
    { id: 3, title: "Task 3", description: "Description of Task 3" },
  ]);

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  
  const item = { id: 4, title: "Task 4", description: "Description of Task 4" };

  const addTodo = (item) => {
    setTodos([...todos, item]);
  };

  const editTodo = (id) => {};

  return (
    <div className="container">
      {console.log(todos)}
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <TodoList key={todo.id} todo={todo} onDelete={() => addTodo(item)} />
      ))}
    </div>
  );
}

export default Todo;
