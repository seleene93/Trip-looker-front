import { useParams } from "react-router-dom";
import { usePosts } from "../../hooks/usePosts";
import { ErrorMessage } from "../errorMessage";
import { PostList } from "../postList";

export const ExperienciasUsuario = () => {
  const { id } = useParams();
  const { posts, loading, error } = usePosts(id);

  if (loading) return <p>Loading tweets...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section id="experiencias-usuario">
      <PostList posts={posts} />
    </section>
  );
};
