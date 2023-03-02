import "./style.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { BotonesLikeDislike } from "../botonesLikeDislike";
import { NavLink } from "react-router-dom";

export const Post = ({ post, posts, setPosts }) => {
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
      <p>
        <b>{post.titulo}</b>
      </p>
      <p>
        <b>Categoria:</b> {post.categoria}
      </p>
      <p>
        <b>Lugar:</b> {post.lugar}
      </p>
      <p>{post.entradilla}</p>

      <section className="botones">
        {user && user.id !== post.id_usuario ? (
          <>
            <BotonesLikeDislike post={post} posts={posts} setPosts={setPosts} />
          </>
        ) : (
          <>
            <p className="numero-likes">{post.votos.positivo}</p>
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
              {post.votos.negativo}
            </p>
          </>
        )}
      </section>
    </li>
  );
};
