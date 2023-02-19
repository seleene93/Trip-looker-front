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
        <div className="logo">
          <img src="/logo/Ilustracion_sin_titulo_2.png" alt="logo"></img>
        </div>
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
            <button>Experiencias</button>
          </NavLink>
        </section>

        <section>
          <img src="/iconos/about.png" alt="icono about"></img>
          <NavLink to="/conocenos">
            <button>Conócenos</button>
          </NavLink>
        </section>

        <section className="menu">
          <img src="/iconos/person.png" alt="icono experiencias"></img>
          {user ? (
            <button id="nombre" onClick={() => setIsOpen(!isOpen)}>
              {user.nombre}
            </button>
          ) : (
            <NavLink to="/card">
              <button id="iniciar-sesion">Iniciar sesión</button>
            </NavLink>
          )}

          {user && isOpen && (
            <section id="menu">
              <menu className="dropdown">
                <NavLink to="/editar-perfil">
                  <button className="botones-dropdown">Editar perfil</button>
                </NavLink>
                <NavLink to={`/mis-experiencias/${user.id}`}>
                  <button className="botones-dropdown">Mis experiencias</button>
                </NavLink>
              </menu>
            </section>
          )}

          {user && isOpen && (
            <button className="botones-dropdown" onClick={() => logout()}>
              Salir
            </button>
          )}
        </section>
      </nav>
    </header>
  );
};
