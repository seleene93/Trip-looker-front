import "./style.css";
import { useState } from "react";
import Select from "react-select";

const categoria = [
  { label: "Ocio", value: "ocio" },
  { label: "Cultural", value: "cultural" },
  { label: "Expedición", value: "expedición" },
  { label: "Romántico", value: "romantico" },
  { label: "Otro", value: "otro" },
];

export const FormFiltros = () => {
  const [selectedCategory, setSelectedCategory] = useState();

  const handleSelectChange = ({ value }) => {
    setSelectedCategory(value);
  };
  return (
    <form id="filtros">
      <Select
        defaultValue={{ label: "Todos", value: "todos" }}
        options={categoria}
        onChange={handleSelectChange}
      />

      <select name="orden-valoraciones">
        <option value="valor1">Orden valoraciones</option>
        <option value="valor1">Ascendente</option>
        <option value="valor2">Descendente</option>
      </select>
    </form>
  );
};
