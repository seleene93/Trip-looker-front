import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./style.css";

export const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header>
      <NavLink to="/">
        <div className="logo">
          <img src="/logo/Ilustracion_sin_titulo_2.png" alt="logo"></img>
        </div>
      </NavLink>

      <nav>
        <section>
          <img
            src="/iconos/publicidad-removebg-preview.png"
            alt="icono experiencias"
          ></img>
          <button>Publicar</button>
        </section>

        <section>
          <img src="/iconos/open-passport.png" alt="icono experiencias"></img>
          <NavLink to="/experiencias">
            <button>Experiencias</button>
          </NavLink>
        </section>

        <section>
          <img src="/iconos/about.png" alt="icono about"></img>
          <NavLink to="/conocenos">
            <button>Conócenos</button>
          </NavLink>
        </section>

        <section>
          <img src="/iconos/person.png" alt="icono experiencias"></img>
          {user ? (
            <NavLink to="/card">
              <button>Nombre</button>
            </NavLink>
          ) : (
            <NavLink to="/card">
              <button>Iniciar sesión</button>
            </NavLink>
          )}

          {user && (
            <button onClick={() => logout()}>
              <img src="/iconos/cerrar-sesion.png"></img>
            </button>
          )}
        </section>
      </nav>
    </header>
  );
};
