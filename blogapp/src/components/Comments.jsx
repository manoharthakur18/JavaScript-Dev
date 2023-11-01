import React, { useEffect, useState } from "react";
import "./comments.css";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
} from "../Assets/CommentsApi";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function Comments({ currentUserId }) {
  const [backendComments, setBackendComments] = useState([]);

  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );

  const getReplies = (commentId) => {
    return backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  const addComment = (text, parentId) => {
    console.log("add comment", text, parentId);
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
    });
  };

  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure that you want to remove comment?")) {
      deleteCommentApi(commentId).then(() => {
        const updatedBackedComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackedComments);
      });
    }
  };

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write Comment</div>
      <CommentForm submitLabel="write" handleSubmit={addComment} />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            currentUserId={currentUserId}
            onDelete={deleteComment}
          />
        ))}
      </div>
    </div>
  );
}

export default Comments;
