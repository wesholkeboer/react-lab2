import Post from "./models/Post";
import "./PostInList.css";

interface Props {
  post: Post;
  onDelete: () => void;
}

const PostInList = ({ post, onDelete }: Props) => {
  return (
    <div className="PostInList">
      <p>{post.title}</p>
      <p>{post.thought}</p>
      <button onClick={onDelete}>delete this post</button>
    </div>
  );
};

export default PostInList;
