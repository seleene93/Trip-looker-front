import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import { ErrorMessage } from "../errorMessage";
import { Loading } from "../Loading";

export const Detalle = () => {
  const { id } = useParams(); // parametros de la ruta y destructuramos el id
  const { post, error, loading } = usePost(id);
  console.log(post);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section id="section-detalle-p">
      <section id="section-detalle-h">
        <section id="detalle-datos" className="detalle-datos-descripcion">
          <ul>
            <li>
              <p>{post[0].titulo}</p>
            </li>
            <li>
              <p>Lugar: {post[0].lugar}</p>
            </li>
            <li>Categoría: {post[0].categoria}</li>
            <li>{post[0].entradilla}</li>
            <li>
              <img
                src={`http://localhost:8080/${post[0].images[0].nombre}`}
              ></img>
            </li>
          </ul>
        </section>
        <section id="detalle-descripcion" className="detalle-datos-descripcion">
          {post[0].texto}
        </section>
      </section>
    </section>
  );
};
