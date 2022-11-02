import { useState } from "react";
import CommentForm from "./component/CommentForm";
import CommentList from "./component/CommentList";

function App() {
  // const comment = [
  //   { id: Date.now(), text: "Nice thought" },
  //   { id: Date.now(), text: "Beautiful Shloka" },
  // ];

  const [comment,setComment]= useState([]);

  return (
    <div>
      <CommentForm setComment={setComment}/>
      <CommentList allComments={comment} />
    </div>
  );
}

export default App;
