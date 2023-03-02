import "./style.css";
import { Post } from "../post";

export const PostList = ({ posts, setPosts }) => {
  return posts.length ? (
    <ul className="post-list">
      {posts.map((post) => {
        return (
          <Post post={post} posts={posts} setPosts={setPosts} key={post.id} />
        );
      })}
    </ul>
  ) : (
    <p>No hay experiencias</p>
  );
};
