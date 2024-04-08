// import React from "react";
import "./App.css";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <button onClick={() => props.remove(props.post)}>remove</button>
      </div>
    </div>
  );
};
export default PostItem;
