import { useParams } from "react-router-dom";
import { usePosts } from "../../hooks/usePosts";
import { Loading } from "../loading";
import { PostList } from "../postList";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export const ExperienciasUsuario = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const { posts, loading } = usePosts(id);

  if (loading) return <Loading />;

  return (
    <section id="experiencias-usuario-p">
      <article id="card-usuario">
        <figure>
          <img
            id="avatar-usuario"
            alt="avatar-usuario"
            src={`http://localhost:8080/${user.avatar}`}
          ></img>
        </figure>
        <ul>
          <li id="nombre-apellidos">
            {user.nombre} {user.apellidos}
          </li>
          <li id="li-email">{user.email}</li>
          <li>
            <img id="ubi" src="/iconos/marcador-de-posicion.png" />
            {user.ciudad}
          </li>
        </ul>
      </article>
      <section id="experiencias-usuario">
        <PostList posts={posts} />
      </section>
    </section>
  );
};
