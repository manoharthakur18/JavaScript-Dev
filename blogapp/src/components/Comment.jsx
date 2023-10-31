import React from "react";
import "./comments.css";

function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="comment-image-container">
        <i className="userImg fa-regular fa-circle-user"></i>
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{comment.createdAt}</div>
        </div>
        <div className="comment-text">{comment.body}</div>
      </div>
    </div>
  );
}

export default Comment;
