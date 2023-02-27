import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { usePosts } from "../../hooks/usePosts";
import { sendPostService } from "../../services";
import { useNavigate } from "react-router-dom";

export const Publicar = () => {
  const navigate = useNavigate();
  const { addPost } = usePosts();
  const { token } = useContext(AuthContext);
  const [images, setImages] = useState(); //
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault(); // Gestionamos el envio

    try {
      setLoading(true);
      const data = new FormData(e.target); // representa el contenido del formulario
      const post = await sendPostService({ data, token });

      addPost(post); // añadimos el tweet a la lista de tweets
      navigate("/experiencias");

      setImages(null); // seteamos la imagen a null para que se reseteee tb
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="section-publicar-p">
      <section id="section-publicar-h">
        <img
          id="logo"
          src="/logo/Ilustracion_sin_titulo_2.png"
          alt="logo"
        ></img>
        <span>Recomiéndanos un lugar donde hayas estado</span>
        <form id="form-publicar" onSubmit={handleForm}>
          <input
            className="nuevo-post"
            type="text"
            name="titulo"
            id="titulo"
            required
            placeholder="* Título"
          ></input>
          <input
            className="nuevo-post"
            type="text"
            name="lugar"
            id="lugar"
            required
            placeholder="* Lugar"
          ></input>
          <textarea
            type="textarea"
            name="entradilla"
            id="entradilla"
            required
            placeholder="* Breve descripción"
          ></textarea>
          <textarea
            type="textarea"
            name="texto"
            id="texto"
            required
            placeholder="* Compártenos tu experiencia"
          ></textarea>
          <select name="categoria">
            <option>Categoría</option>
            <option value="ocio">Ocio</option>
            <option value="cultural">Culturales</option>
            <option value="expedicion">Expediciones</option>
            <option value="romantico">Románticos</option>
            <option value="otro">Otros</option>
          </select>
          <input
            className="nuevo-post"
            type="file"
            name="images"
            id="images"
            accept={"image/*"}
            onChange={(e) => setImages(e.target.files[0])}
            multiple
          ></input>
          <button id="button-publicar">
            Publicar <img src="/iconos/651035.png"></img>
          </button>
          {error ? <p>{error}</p> : null}
          {loading ? <p>posting tweet...</p> : null}
        </form>
      </section>
    </section>
  );
};
