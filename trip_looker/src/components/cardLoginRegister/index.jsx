import { NavLink } from "react-router-dom";
import "./style.css";
export const Card = () => {
  return (
    <article className="card">
      <img id="logo" src="/logo/Ilustracion_sin_titulo_2.png" alt="logo"></img>
      <p>Estás a punto de sumarte a la aventura</p>
      <NavLink to="/login" className="navlink">
        <button className="iniciar-sesion">Iniciar sesión</button>
      </NavLink>
      <p>¿No eres miembro?</p>
      <NavLink to="/registro" className="navlink">
        <button className="iniciar-sesion">¡Únete!</button>
      </NavLink>
    </article>
  );
};
