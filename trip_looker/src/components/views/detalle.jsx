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
              <p id="titulo">{post[0].titulo}</p>
            </li>
            <li id="entradilla">{post[0].entradilla}</li>
            <li className="p-lugar-categoria">
              <p>
                <b>Lugar:</b> {post[0].lugar}
              </p>
            </li>
            <li className="p-lugar-categoria">
              <p>
                <b>Categoría:</b> {post[0].categoria}
              </p>
            </li>
            <li id="img-flechas">
              <PostImage post={post} />
            </li>
          </ul>
        </section>
        <section
          className="detalle-datos-descripcion"
          style={{
            "box-shadow": "20px 0 20px -20px  rgba(0, 0, 0, 0.732) inset",
          }}
        >
          <section id="detalle-descripcion">{post[0].texto}</section>
        </section>
      </section>
    </section>
  );
};
