import { Link } from "react-router-dom";

export default function NoEncontrada() {
  return (
    <div className="estado">
      <h1>404: página no encontrada</h1>
      <p>La dirección que escribiste no existe en este recetario.</p>
      <Link to="/" className="boton">Volver al inicio</Link>
    </div>
  );
}
