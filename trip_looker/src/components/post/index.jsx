import "./style.css";
export const Post = ({ post }) => {
  return (
    <li>
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
      <li>{post.titulo}</li>
      <li>Categoria: {post.categoria}</li>
      <li>Lugar: {post.lugar}</li>
      <li>{post.entradilla}</li>
      <section className="botones">
        <button>
          <img src="/iconos/me-gusta.png"></img>
        </button>
        <button id="detalle">Ver</button>
        <button>
          <img src="/iconos/dislike.png"></img>
        </button>
      </section>
    </li>
  );
};
