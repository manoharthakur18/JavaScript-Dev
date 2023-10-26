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
          : { id: t.id, todo: t.todo }
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
    <section class="vh-100" style={{ background: "#eee" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-lg-9 col-xl-7">
            <div class="card rounded-3">
              <div class="card-body p-4">
                <h4 class="text-center my-2 pb-3">To Do App</h4>
                <form onSubmit={handleSubmit}>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Add Todo..."
                    onChange={handleChange}
                    value={todo}
                  />
                  <button className="btn btn-primary my-3">Add Todo</button>
                </form>
                <table className="table mb-4">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  {todos.map((todo, index) => (
                    <TodoList
                      serialNo={index + 1}
                      key={todo.id}
                      todo={todo}
                      onDelete={deleteTodo}
                      onEdit={editTodo}
                    />
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Todo;
