import "./style.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
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
        {user ? (
          <>
            <button>
              <img src="/iconos/me-gusta.png"></img>
            </button>
            <NavLink to={`/post/${post.id}`}>
              <button id="detalle">Ver</button>
            </NavLink>
            <button>
              <img src="/iconos/dislike.png"></img>
            </button>
          </>
        ) : (
          <NavLink to={`/post/${post.id}`}>
            <button id="detalle">Ver</button>
          </NavLink>
        )}
      </section>
    </li>
  );
};
