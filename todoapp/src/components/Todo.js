import React, { useState } from "react";
import TodoList from "./TodoList";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editedId, setEditedId] = useState(0);

  const deleteTodo = (id) => {
    console.log(id);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id) => {
    console.log(id);
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditedId(id);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editedId) {
      const editTodo = todos.find((i) => i.id === editedId);
      const updatedTodo = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { i: t.id, todo: t.todo }
      );
      setTodos(updatedTodo);
      setEditedId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([...todos, { id: `${todo}-${Date.now()}`, todo }]);
      setTodo("");
    }
  };
  return (
    <>
      <div className="container bg-dark pt-5">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mg-3"
            type="text"
            placeholder="Add Todo..."
            onChange={handleChange}
            value={todo}
          />
          <button className="btn btn-primary mt-2">Add Todo</button>
        </form>
      </div>
      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      ))}
    </>
  );
}

export default Todo;
