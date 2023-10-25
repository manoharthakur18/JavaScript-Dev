import React from "react";
import { useLocation } from "react-router-dom";
import '../css/UserDetails.css'
function UserDetails() {
  const location = useLocation();
  const user = location.state.user;

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Company:</strong> {user.company}
      </p>
    </div>
  );
}

export default UserDetails;
