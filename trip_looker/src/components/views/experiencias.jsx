import { FormFiltros } from "../formFiltros";
import { PostList } from "../postList";
import { usePosts } from "../../hooks/usePosts";
import { Loading } from "../loading";
import { ErrorMessage } from "../errorMessage";

export const Experiencias = () => {
  const { posts, setPosts, error, loading } = usePosts();

  if (loading) return <Loading />; // si está cargando retornamos el componente Loading y si hay error retornamos el componente ErrorMessage, que están creados en la carpeta components, para hacer más lenta la pagina nos vamos a las DevOps, network, no Throttling y lo cambiamos a Fast 3G u otra más lenta
  if (error) return <ErrorMessage message={error} />;
  return (
    <section className="form-exp">
      <FormFiltros setPosts={setPosts} error={error} loading={loading} />
      <section className="contenedor-lista">
        <PostList posts={posts} setPosts={setPosts} />
      </section>
    </section>
  );
};
