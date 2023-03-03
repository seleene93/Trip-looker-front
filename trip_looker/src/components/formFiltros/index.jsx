import "./style.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getFilterPostsService } from "../../services";

export const FormFiltros = ({ setPosts }) => {
  const [categoria, setCategoria] = useState();
  const [direccion, setDireccion] = useState();
  const [lugar, setLugar] = useState();
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault(); // Gestionamos el envio

    try {
      setLoading(true);

      const posts = await getFilterPostsService({
        token,
        categoria,
        lugar,
        direccion,
      });

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
        onChange={(e) => setLugar(e.target.value)}
      />

      <select onChange={(e) => setCategoria(e.target.value)}>
        <option value="">Categoría</option>
        <option value="ocio">Ocio</option>
        <option value="cultural">Culturales</option>
        <option value="expedicion">Expediciones</option>
        <option value="romantico">Románticos</option>
        <option value="otro">Otros</option>
      </select>

      <select onChange={(e) => setDireccion(e.target.value)}>
        <option value="">Orden valoraciones</option>
        <option value="ASC">Ascendente</option>
        <option value="DESC">Descendente</option>
      </select>
      <button type="submit">
        <img id="lupa" src="/iconos/lupa.png"></img>
      </button>
      {error ? <p>{error}</p> : null}
    </form>
  );
};
