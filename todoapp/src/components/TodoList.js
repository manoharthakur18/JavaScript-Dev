import React from "react";

function TodoList({ todo, onDelete, onEdit }) {
  return (
    <div className="container mb-3">
      <div className="card-body">
        <p className="card-text">{todo.todo}</p>
        <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
        <button className="btn btn-primary" onClick={() => onEdit(todo.id)}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default TodoList;
