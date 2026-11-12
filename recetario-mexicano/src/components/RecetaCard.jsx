import { Link } from "react-router-dom";

// Imagen de respaldo (SVG en línea) por si la URL de la foto falla
const RESPALDO =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='#e4e8e0'/><text x='50%' y='50%' font-size='64' text-anchor='middle' dominant-baseline='middle'>🌮</text></svg>"
  );

export default function RecetaCard({ receta }) {
  const { id, nombre, imagen, categoria, tiempo_preparacion } = receta;

  return (
    <article className="card">
      <img
        src={imagen}
        alt={nombre}
        loading="lazy"
        onError={(e) => { e.currentTarget.src = RESPALDO; }}
      />
      <div className="card-cuerpo">
        <span className="etiqueta">{categoria}</span>
        <h3>{nombre}</h3>
        <p className="meta">{tiempo_preparacion} min</p>
        <Link to={`/receta/${id}`} className="boton">Ver receta</Link>
      </div>
    </article>
  );
}
