import { useState } from "react";
import "./newComment.css";
import { addNewComment } from "../../services/addNewCommentService";
import { getAllComments } from "../../services/getAllCommentService";
export default function NewComment({ history }) {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = async () => {
    try {
      await addNewComment({
        ...comment,
        postId: 10,
      });
      history.push("/");
    } catch (error) {}
  };

  return (
    <div className="newComment">
      <h2>Add new commment</h2>
      <div className="formControl">
        <label>name</label>
        <input type="text" name="name" onChange={changeHandler} />
      </div>
      <div className="formControl">
        <label>email</label>
        <input type="email" name="email" onChange={changeHandler} />
      </div>
      <div className="formControl">
        <label>body</label>
        <textarea type="textarea" name="body" onChange={changeHandler} />
      </div>
      <button onClick={postCommentHandler}>add New Comment</button>
    </div>
  );
}
