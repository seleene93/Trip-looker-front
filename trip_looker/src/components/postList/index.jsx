import "./style.css";
import { Post } from "../post";

export const PostList = ({ posts }) => {
  return posts.length ? ( // Si hay posts
    <ul className="post-list">
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </ul>
  ) : (
    // Si no hay tweets
    <p>No hay experiencias</p>
  );
};
