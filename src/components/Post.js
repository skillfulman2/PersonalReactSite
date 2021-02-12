import React from "react";
import Firebase from "./Firebase";
import { Link } from "react-router-dom";
import { navigate } from "@reach/router";
import "./Post.css";

const Post = (props) => {
    console.log(props.post.text)
  return (
    <div className="post">
      {props.post.defaultImage && (
        <img src={props.post.defaultImage} alt="hei" />
      )}
      {/*<div
        className="post-inner"
        onClick={() => navigate("/posts/" + props.id)}
      >*/}
        <Link className="post-inner" to={`/posts/${props.id}`}>
          <div>
            <h1>{props.id}</h1>
            <h1>{props.post.title}</h1>
            <h1>{props.post.text}</h1>
           { /*<div className='post-byline'>{props.post.byline}</div> */}
          </div>
        </Link>
      {/*</div>*/}
    </div>
  );
};
export default Post;
