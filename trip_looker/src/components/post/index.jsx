import "./style.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { BotonesLikeDislike } from "../botonesLikeDislike";
import { NavLink } from "react-router-dom";

export const Post = ({ post }) => {
  const { user } = useContext(AuthContext);

  return (
    <li className="li-post">
      <figure>
        <img
          className="img-post"
          src={
            post.images?.length > 0
              ? `http://localhost:8080/${post.images[0].nombre}`
              : "/img/playa.jpg"
          }
        />
      </figure>
      <p>{post.titulo}</p>
      <p>Categoria: {post.categoria}</p>
      <p>Lugar: {post.lugar}</p>
      <p>{post.entradilla}</p>

      <section className="botones">
        {user && user.id !== post.id_usuario ? (
          <>
            <BotonesLikeDislike post={post} />
          </>
        ) : (
          <>
            <p className="numero-likes">{post.votos[0].voto_positivo}</p>
            <button disabled>
              <img src="/iconos/me-gusta.svg"></img>
            </button>
            <NavLink to={`/post/${post.id}`}>
              <button id="detalle">Ver</button>
            </NavLink>
            <button disabled>
              <img src="/iconos/dislike.svg"></img>
            </button>
            <p className="numero-likes" id="dislike">
              {post.votos[0].voto_negativo}
            </p>
          </>
        )}
      </section>
    </li>
  );
};
