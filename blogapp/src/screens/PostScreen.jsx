import React from "react";
import "./postscreen.css";
import SideBar from "../components/SideBar";
import SinglePost from "../components/SinglePost";
import Comments from "../components/Comments";
import { useLocation } from "react-router-dom";

function PostScreen() {
  const post = useLocation().state;

  return (
    <>
      <div className="postScreen">
        <SinglePost post={post} />
        <SideBar />
      </div>
      <Comments currentUserId="1" />
    </>
  );
}

export default PostScreen;
