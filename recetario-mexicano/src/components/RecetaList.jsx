import RecetaCard from "./RecetaCard";

export default function RecetaList({ recetas }) {
  if (recetas.length === 0) {
    return <p className="vacio">No encontramos recetas con ese filtro. Prueba con otra palabra o categoría.</p>;
  }

  return (
    <section className="grid">
      {recetas.map((receta) => (
        <RecetaCard key={receta.id} receta={receta} />
      ))}
    </section>
  );
}
