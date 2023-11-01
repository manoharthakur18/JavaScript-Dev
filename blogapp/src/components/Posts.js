import React from "react";
import "./posts.css";
import Post from "./Post";
import { PostsData } from "../Assets/PostsData";

function Posts() {
  const postData = PostsData;

  return (
    <div className="posts">
      {PostsData.map((post) => {
        return <Post post={post} />;
      })}
      {/* <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://images.pexels.com/photos/7964660/pexels-photo-7964660.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      <Post img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" /> */}
    </div>
  );
}

export default Posts;
