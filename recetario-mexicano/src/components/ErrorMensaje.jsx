export default function ErrorMensaje({ mensaje }) {
  return (
    <div className="estado error" role="alert">
      <h2>No pudimos cargar las recetas</h2>
      <p>Revisa tu conexión a internet e inténtalo de nuevo.</p>
      <p className="detalle-tecnico">Detalle: {mensaje}</p>
      <button className="boton" onClick={() => window.location.reload()}>Reintentar</button>
    </div>
  );
}
