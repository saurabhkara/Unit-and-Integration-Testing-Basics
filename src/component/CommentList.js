import React from "react";

export default function CommentList({ allComments }) {

  if (allComments.length === 0) {
    return <h2>No comments</h2>;
  }

  return (
    <div>
      <ul key={Date.now()}>
        {allComments.map((item, index) => {
          return <li key={index}>{item.text}</li>;
        })}
      </ul>
    </div>
  );
}
