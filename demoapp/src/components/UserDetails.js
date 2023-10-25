import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../css/UserDetails.css'
function UserDetails() {
  const location = useLocation();
  const user = location.state.user;
  const navigate = useNavigate();

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
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default UserDetails;
