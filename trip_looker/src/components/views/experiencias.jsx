import { FormFiltros } from "../formFiltros";
import { Article } from "../article";

export const Experiencias = () => {
  return (
    <section className="form-exp">
      <FormFiltros />
      <section className="contenedor-lista">
        <Article />
      </section>
    </section>
  );
};
