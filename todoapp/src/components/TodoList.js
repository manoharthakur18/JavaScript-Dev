import React from "react";

function TodoList({ serialNo, todo, onDelete, onEdit }) {
  return (
    <tbody>
      <tr>
        <th scope="row">{serialNo}</th>
        <td>{todo.todo}</td>
        <td>
          <button
            className="btn btn-success ms-1"
            onClick={() => onEdit(todo.id)}
          >
            Edit
          </button>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default TodoList;
