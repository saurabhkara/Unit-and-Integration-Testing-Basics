import React, { useEffect, useState } from "react";

export default function CommentForm({ setComment }) {
  const [inputData, setInputData] = useState("");
  const [isCheckActive, setIsCheckActive] = useState(false);

  const addComment = () => {
    setComment((prev) => [...prev, { id: Date.now(), text: inputData }]);
    setInputData("");
  };

  useEffect(()=>{
    console.log('rendering again')
  },[isCheckActive]);

  return (
    <div>
      <h1>Comment Form</h1>
      <input
        placeholder="Write your comment here"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <input
        id="checkbox"
        type="checkbox"
        defaultChecked={isCheckActive}
        onChange={() => setIsCheckActive(!isCheckActive)}
      />
      <br />
      <label htmlFor="checkbox">I agree to terms and conditions</label>
      <br />
      <button
        id="button"
        disabled={!isCheckActive || !inputData}
        onClick={addComment}
      >
        Comment
      </button>
    </div>
  );
}
