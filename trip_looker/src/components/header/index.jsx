import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./style.css";

export const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <NavLink to="/">
        <img
          src="/logo/Ilustracion_sin_titulo_2.png"
          alt="logo"
          id="logo"
        ></img>
      </NavLink>

      <nav>
        {user && (
          <section>
            <img
              src="/iconos/publicidad-removebg-preview.png"
              alt="icono experiencias"
            ></img>
            <NavLink to="/nuevo-post">
              <button>Publicar</button>
            </NavLink>
          </section>
        )}

        <section>
          <img src="/iconos/open-passport.png" alt="icono experiencias"></img>
          <NavLink to="/experiencias">
            <button>Posts</button>
          </NavLink>
        </section>

        <section>
          <img src="/iconos/about.png" alt="icono about"></img>
          <NavLink to="/conocenos">
            <button>Conócenos</button>
          </NavLink>
        </section>

        <section className="menu">
          <img
            src="/iconos/person.png"
            alt="icono usuario"
            id="icono-iniciar-sesion"
          ></img>
          {user ? (
            <button id="nombre" onClick={() => setIsOpen(!isOpen)}>
              {user.nombre}
            </button>
          ) : (
            <NavLink to="/card">
              <button>Iniciar sesión</button>
            </NavLink>
          )}

          {user && isOpen && (
            <section id="dropdown">
              <menu className="dropdown">
                <NavLink to="/editar-perfil">
                  <button className="botones-dropdown">Editar perfil</button>
                </NavLink>
                <NavLink to={`/mis-experiencias/${user.id}`}>
                  <button className="botones-dropdown">Mis experiencias</button>
                </NavLink>
                <NavLink to="/">
                  <button
                    id="logout"
                    className="botones-dropdown"
                    onClick={() => logout()}
                  >
                    Salir
                  </button>
                </NavLink>
              </menu>
            </section>
          )}
        </section>
      </nav>
    </header>
  );
};
