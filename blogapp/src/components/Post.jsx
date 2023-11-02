import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./post.css";

function Post({ post }) {
  const navigate = useNavigate();
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
          <div
            onClick={() => navigate(`/post/${post.id}`, { state: post })}
            className="link"
          >
            {post.title}
          </div>
        </span>
        <hr />
        <span className="postDate">{post.date}</span>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
  );
}

export default Post;
