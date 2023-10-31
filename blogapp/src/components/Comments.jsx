import React, { useEffect, useState } from "react";
import "./comments.css";
import { getComments as getCommentsApi } from "../Assets/CommentsApi";
import Comment from "./Comment";

function Comments({ currentUserId }) {
  const [backendComments, setBackendComments] = useState([]);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  console.log(backendComments);

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comments-container">
        {rootComments.map((rootcomment) => (
          <Comment key={rootcomment.id} comment={rootcomment} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
