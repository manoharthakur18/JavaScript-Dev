import React from "react";
import "./postscreen.css";
import SideBar from "../components/SideBar";
import SinglePost from "../components/SinglePost";

function PostScreen() {
  return (
    <div className="postScreen">
      <SinglePost />
      <SideBar />
    </div>
  );
}

export default PostScreen;
