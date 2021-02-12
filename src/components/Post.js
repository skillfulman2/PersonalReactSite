import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
    console.log(props.post.text)
  return (
    <div className="post">
      {props.post.background && (
        <img src={props.post.background} alt="hei" />
      )}
      {/*<div
        className="post-inner"
        onClick={() => navigate("/posts/" + props.id)}
      >*/}
        <Link className="post-inner" to={`/posts/${props.id}`}>
          <div>
            
            <h1>{props.post.title}</h1>
            
           { /*<div className='post-byline'>{props.post.byline}</div> */}
          </div>
        </Link>
      {/*</div>*/}
    </div>
  );
};
export default Post;
