import { useState } from "react";
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Name of post"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Description of post"
      />

      <MyButton onClick={addNewPost}>Create</MyButton>
    </form>
  );
};
export default PostForm;
