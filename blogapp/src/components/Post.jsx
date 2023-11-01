import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

function Post({ post }) {
  return (
    <div className="post">
      <img className="postImg" src={post.img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              {post.category}
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{post.date}</span>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
  );
}

export default Post;
