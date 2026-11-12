import { Link } from "react-router-dom";

export default function RecetaDetalle({ receta }) {
  const { nombre, descripcion, imagen, region, categoria, tiempo_preparacion, dificultad, porciones, ingredientes, pasos } = receta;

  return (
    <article className="detalle">
      <Link to="/" className="volver">Volver a las recetas</Link>
      <h1>{nombre}</h1>
      <p className="descripcion">{descripcion}</p>

      <img className="detalle-img" src={imagen} alt={nombre} />

      <dl className="datos">
        <div><dt>Región</dt><dd>{region}</dd></div>
        <div><dt>Categoría</dt><dd>{categoria}</dd></div>
        <div><dt>Tiempo</dt><dd>{tiempo_preparacion} min</dd></div>
        <div><dt>Dificultad</dt><dd>{dificultad}</dd></div>
        <div><dt>Porciones</dt><dd>{porciones}</dd></div>
      </dl>

      <div className="detalle-columnas">
        <section>
          <h2>Ingredientes</h2>
          <ul className="ingredientes">
            {ingredientes.map((ing) => <li key={ing}>{ing}</li>)}
          </ul>
        </section>
        <section>
          <h2>Preparación</h2>
          <ol className="pasos">
            {pasos.map((paso, i) => <li key={i}>{paso}</li>)}
          </ol>
        </section>
      </div>
    </article>
  );
}
