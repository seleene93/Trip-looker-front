import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import { ErrorMessage } from "../errorMessage";
import { Loading } from "../Loading";
import { PostImage } from "../postImage";

export const Detalle = () => {
  const { id } = useParams(); // parametros de la ruta y destructuramos el id
  const { post, error, loading } = usePost(id);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section id="section-detalle-p">
      <section id="section-detalle-h">
        <section className="detalle-datos-descripcion">
          <ul id="detalle-datos">
            <li>
              <p>{post[0].titulo}</p>
            </li>
            <li>
              <p>Lugar: {post[0].lugar}</p>
            </li>
            <li>Categoría: {post[0].categoria}</li>
            <li>{post[0].entradilla}</li>
            <li id="img-flechas">
              <PostImage post={post} />
            </li>
          </ul>
        </section>
        <section className="detalle-datos-descripcion">
          <section id="detalle-descripcion">{post[0].texto}</section>
        </section>
      </section>
    </section>
  );
};
