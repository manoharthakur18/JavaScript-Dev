import React, { useState } from "react";

function CommentForm({ handleSubmit, submitLabel }) {
  const [text, setText] = useState("");

  const isTextAreaDisabled = text.length === 0;

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        name=""
        id=""
        cols="30"
        rows="10"
      />
      <button className="comment-form-button" disabled={isTextAreaDisabled}>
        {submitLabel}
      </button>
    </form>
  );
}

export default CommentForm;
