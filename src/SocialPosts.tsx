import { useState } from "react";
import Post from "./models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: "Mithc",
      thought: "this is react lab 2",
    },
    {
      title: "olivia rodrigo",
      thought: "driver's license is a song",
    },
    {
      title: "yes",
      thought: "thiss is the third thought",
    },
  ]);
  const [display, setDisplay] = useState<boolean>(false);

  const onDelete = (index: number) =>
    setPosts((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);

  const onSubmit = (post: Post): void => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <div className="SocialPosts">
      <button
        onClick={() => {
          setDisplay(true);
        }}
      >
        Add thought
      </button>
      <div className={`modal ` + (display ? "show" : "none")}>
        <PostForm onSubmit={onSubmit} onClose={() => setDisplay(false)} />
      </div>
      <ul>
        {posts.map((item, index: number) => (
          <li>
            <PostInList post={item} onDelete={() => onDelete(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialPosts;
