import "./style.css";
import { Post } from "../post";

export const PostList = ({ posts }) => {
  return posts.length ? (
    <ul className="post-list">
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </ul>
  ) : (
    <p>No hay experiencias</p>
  );
};
