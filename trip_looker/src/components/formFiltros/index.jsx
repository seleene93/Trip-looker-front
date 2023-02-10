import "./style.css";

export const FormFiltros = () => {
  return (
    <form id="filtros">
      <select name="categoria" placeholder="Categoria">
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
  );
};
