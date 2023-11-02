import React from "react";
import "./posts.css";
import Post from "./Post";
import { PostsData } from "../Assets/PostsData";

function Posts() {
  return (
    <div className="posts">
      {PostsData.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}

export default Posts;
