import React from "react";
import "./postscreen.css";
import SideBar from "../components/SideBar";
import SinglePost from "../components/SinglePost";
import Comments from "../components/Comments";

function PostScreen() {
  return (
    <>
      <div className="postScreen">
        <SinglePost />
        <SideBar />
      </div>
      <Comments currentUserId={1} />
    </>
  );
}

export default PostScreen;
