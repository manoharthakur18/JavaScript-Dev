import React from "react";
import "./singlepost.css";
import { Link } from "react-router-dom";

function SinglePost({ post }) {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={post.img} alt="" />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {post.author}
              </Link>
            </b>
          </span>
          <span>{post.date}</span>
        </div>
        <p className="singlePostDesc">{post.description}</p>
      </div>
    </div>
  );
}

export default SinglePost;
