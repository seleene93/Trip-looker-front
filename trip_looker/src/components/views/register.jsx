export const Register = () => {
  return (
    <section className="cardLoginOrRegister" style={{ width: "26rem" }}>
      <article className="card" style={{ width: "100%", height: "80%" }}>
        <img
          id="logo"
          src="/logo/Ilustracion_sin_titulo_2.png"
          alt="logo"
        ></img>
        <p>Regístrate para conocer lo mejor de Trip Looker</p>
        <form className="form-card" style={{}}>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="* Nombre"
          />
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="* Apellidos"
          />
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="* Email"
          />
          <input
            type="text"
            name="city"
            id="city"
            required
            placeholder="* Ciudad"
          />
          <input type="text" name="dni" id="dni" required placeholder="* DNI" />
          <input
            type="password"
            name="pass"
            id="pass"
            required
            placeholder="* Contraseña"
          />
          <section className="section-inputs-esp">
            <p className="p-inputs-esp">* Fecha de nacimiento</p>
            <input
              className="inputs-esp"
              type="date"
              name="birthday"
              id="birthday"
            />
          </section>
          <section className="section-inputs-esp">
            <p className="p-inputs-esp">* Elige una imágen</p>
            <input
              className="inputs-esp"
              type="file"
              name="img-user"
              id="img-user"
            />
          </section>
        </form>
        <button className="iniciar-sesion">Registrarse</button>
      </article>
    </section>
  );
};
