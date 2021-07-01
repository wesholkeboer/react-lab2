import { FormEvent, useState } from "react";
import Post from "./models/Post";
import "./PostForm.css";

interface Props {
  onSubmit: (post: Post) => void;
  onClose: () => void;
}

const PostForm = ({ onSubmit, onClose }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ title, thought });
    onClose();
    setTitle("");
    setThought("");
  };

  return (
    <div className="PostForm">
      <form className="add-form" onSubmit={handleFormSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <label htmlFor="thought">Thougth</label>
        <textarea
          name="thought"
          id="thought"
          cols={30}
          rows={10}
          onChange={(e) => {
            setThought(e.target.value);
          }}
          value={thought}
        ></textarea>
        <button>add</button>
      </form>
    </div>
  );
};

export default PostForm;
