import "./style.css";

export const FormFiltros = () => {
  return (
    <form id="filtros">
      <input type="text" id="lugar" name="lugar" placeholder="Lugar" />

      <select name="categoria">
        <option>Categoría</option>
        <option value="ocio">Ocio</option>
        <option value="cultural">Culturales</option>
        <option value="expedicion">Expediciones</option>
        <option value="romatico">Románticos</option>
        <option value="otro">Otros</option>
      </select>

      <select name="orden-valoraciones">
        <option>Orden valoraciones</option>
        <option value="ascendente">Ascendente</option>
        <option value="descendente">Descendente</option>
      </select>
      <button>
        <img id="lupa" src="/iconos/lupa.png"></img>
      </button>
    </form>
  );
};
