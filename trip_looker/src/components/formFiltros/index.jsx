import "./style.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  getAllPostsService,
  getFilterPostsService,
  getPostsByVotesService,
} from "../../services";

export const FormFiltros = ({ setPosts }) => {
  const [categoria, setCategoria] = useState();
  const [orden, setOrden] = useState();
  const [lugar, setLugar] = useState();
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault(); // Gestionamos el envio

    try {
      setLoading(true);
      // Creamos condiciones para manejar si enviamos o no categoria y lugar para obtener los posts.
      let posts;

      if (categoria && lugar) {
        posts = await getFilterPostsService({ token, categoria, lugar });
      } else if (categoria) {
        posts = await getFilterPostsService({ token, categoria });
      } else if (lugar) {
        posts = await getFilterPostsService({ token, lugar });
      } else {
        posts = await getAllPostsService(token);
      }

      // Creamos condiciones para manejar si enviamos o no categoria y lugar y orden de votos para obtener los posts.
      if (categoria && lugar && orden) {
        posts = await getPostsByVotesService({
          token,
          categoria,
          lugar,
          orden,
        });
      } else if (lugar && orden) {
        posts = await getPostsByVotesService({
          token,
          lugar,
          orden,
        });
      } else if (orden && categoria) {
        posts = await getPostsByVotesService({
          token,
          categoria,
          orden,
        });
      } else {
        posts = await getPostsByVotesService({
          token,
          orden,
        });
      }

      setPosts(posts);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="filtros" onSubmit={handleForm}>
      <input
        type="text"
        id="lugar"
        name="lugar"
        placeholder="Lugar"
        onChange={(e) => {
          e.target.value !== undefined && setLugar(e.target.value);
        }}
      />

      <select
        onChange={(e) => {
          e.target.value !== undefined && setCategoria(e.target.value);
        }}
      >
        <option value="">Categoría</option>
        <option value="ocio">Ocio</option>
        <option value="cultural">Culturales</option>
        <option value="expedicion">Expediciones</option>
        <option value="romantico">Románticos</option>
        <option value="otro">Otros</option>
      </select>

      <select
        onChange={(e) => {
          e.target.value !== undefined && setOrden(e.target.value);
        }}
      >
        <option value="">Orden valoraciones</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
      <button type="submit">
        <img id="lupa" src="/iconos/lupa.png"></img>
      </button>
      {error ? <p>{error}</p> : null}
    </form>
  );
};
