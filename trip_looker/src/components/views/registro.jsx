import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserService } from "../../services";

export const Registro = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [password, setPassword] = useState("");
  const [fecha_nac, setFechaNac] = useState("");
  const [avatar, setAvatar] = useState();
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    // Función manejadora del formulario
    e.preventDefault(); // evitamos que se envie por defecto

    const data = new FormData();
    data.append("nombre", nombre);
    data.append("apellidos", apellidos);
    data.append("email", email);
    data.append("ciudad", ciudad);
    data.append("password", password);
    data.append("fecha_nac", fecha_nac);
    data.append("avatar", avatar);

    try {
      await registerUserService({ data });

      navigate("/"); // 2 No podemos usar link porq los ocmponentes solo pueden ir en jsx, aqui utilizamos el hook navigate
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="cardLoginOrRegister">
      <article id="card-register">
        <img
          id="logo"
          src="/logo/Ilustracion_sin_titulo_2.png"
          alt="logo"
        ></img>
        <p>Regístrate para conocer lo mejor de Trip Looker</p>
        <form className="form-card" onSubmit={handleForm}>
          <input
            type="text"
            name="nombre"
            id="nombre"
            required
            placeholder="* Nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            name="apellidos"
            id="apellidos"
            required
            placeholder="* Apellidos"
            onChange={(e) => setApellidos(e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="* Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="ciudad"
            id="ciudad"
            required
            placeholder="* Ciudad"
            onChange={(e) => setCiudad(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="* Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <section className="section-inputs-esp">
            <p className="p-inputs-esp">* Fecha de nacimiento</p>
            <input
              className="inputs-esp"
              type="date"
              name="fecha_nac"
              id="fecha_nac"
              required
              onChange={(e) => setFechaNac(e.target.value)}
            />
          </section>
          <section className="section-inputs-esp">
            <p className="p-inputs-esp">* Elige una imágen</p>
            <input
              className="inputs-esp"
              type="file"
              name="avatar"
              id="avatar"
              accept={"image/*"}
              onChange={(e) => setAvatar(e.target.files[0])}
            />
            {avatar ? ( // si hay imagen creamos una vista previa de la imagen
              <figure>
                <img
                  src={URL.createObjectURL(avatar)} // acepta un obj de tipo file y crea una representacion de elemento html
                  style={{ width: "80px", height: "80px" }}
                  alt="Preview"
                />
              </figure>
            ) : null}
          </section>
          <button className="iniciar-sesion">Registrarse</button>
        </form>
        {error ? <p>{error}</p> : null}
      </article>
    </section>
  );
};
