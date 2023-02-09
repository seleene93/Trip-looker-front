import { NavLink } from "react-router-dom";
import "./style.css";

export const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <div className="logo">
          <img src="/logo/Ilustracion_sin_titulo_2.png" alt="foto"></img>
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
          <img src="/iconos/about.png" alt="icono experiencias"></img>
          <button>Conócenos</button>
        </section>

        <section>
          <img src="/iconos/person.png" alt="icono experiencias"></img>
          <button>Iniciar sesión</button>
        </section>
      </nav>
    </header>
  );
};
