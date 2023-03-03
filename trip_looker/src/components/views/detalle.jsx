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
      <section className="section-detalle-h" id="detalle">
        <section className="detalle-datos-descripcion">
          <ul id="detalle-datos">
            <li>
              <p id="titulo">{post.titulo}</p>
            </li>
            <li id="entradilla">{post.entradilla}</li>
            <li className="p-lugar-categoria">
              <p>
                <b>Lugar:</b> {post.lugar}
              </p>
            </li>
            <li className="p-lugar-categoria">
              <p>
                <b>Categoría:</b> {post.categoria}
              </p>
            </li>
            <li id="img-flechas">
              <PostImage post={post} />
            </li>
          </ul>
        </section>
      </section>
      <section className="section-detalle-h" id="detalle-texto">
        <section className="detalle-datos-descripcion">
          <section id="detalle-descripcion">{post.texto}</section>
        </section>
      </section>
    </section>
  );
};
