import { Link } from "react-router-dom";
import "./style.css";

export const ErrorMessage = ({ message }) => {
  // Buena practica hacer este componente
  return (
    <section className="error">
      <p>{message}</p>
      <Link to={"/"}>Ir a la home</Link>
    </section>
  );
};
