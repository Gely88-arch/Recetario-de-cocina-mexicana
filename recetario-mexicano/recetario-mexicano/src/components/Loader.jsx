export default function Loader() {
  return (
    <div className="estado" role="status" aria-live="polite">
      <span className="spinner" />
      <p>Cargando recetas…</p>
    </div>
  );
}
