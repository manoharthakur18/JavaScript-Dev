import React from 'react';

function TodoList({ todo, onDelete }) {
  return (
    <div className="container mb-3">
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.description}</p>
        <button
          className="btn btn-danger"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoList;
