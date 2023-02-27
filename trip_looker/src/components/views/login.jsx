import { useContext, useState } from "react";
import { logInUserService } from "../../services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const { token } = await logInUserService({ email, password }); // obtenemos el token

      login(token); // usamos el token para indicarlo en login

      navigate("/"); // nos redirige al home
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="cardLoginOrRegister">
      <article className="card">
        <img
          id="logo"
          src="/logo/Ilustracion_sin_titulo_2.png"
          alt="logo"
        ></img>
        <p id="texto1">Entra para compartir tus experiencias</p>
        <form onSubmit={handleForm} className="form-card">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="* Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="pass"
            id="pass"
            value={password}
            placeholder="* Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="iniciar-sesion">Iniciar sesión</button>
          {error ? <p>{error}</p> : null}
        </form>
      </article>
    </section>
  );
};
