import "./style.css";
export const Experiencias = () => {
  return (
    <section className="form">
      <form>
        <select name="categoria">
          <option value="valor1">Categoría</option>
          <option value="valor1">Ocio</option>
          <option value="valor2">Culturales</option>
          <option value="valor3">Expediciones</option>
          <option value="valor3">Románticos</option>
          <option value="valor3">Otros</option>
        </select>

        <select name="orden-valoraciones">
          <option value="valor1">Orden valoraciones</option>
          <option value="valor1">Ascendente</option>
          <option value="valor2">Descendente</option>
        </select>
      </form>
      <article>
        <section>
          <img src="/img/playa.jpg"></img>
          <p>Título</p>
          <p>Categoría</p>
          <p>Lugar</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and (entradila)
          </p>
        </section>
      </article>
    </section>
  );
};
