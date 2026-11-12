import { useParams, Link } from "react-router-dom";
import RecetaDetalle from "../components/RecetaDetalle";
import Loader from "../components/Loader";
import ErrorMensaje from "../components/ErrorMensaje";

export default function DetallePage({ recetas, loading, error }) {
  const { id } = useParams(); // parámetro dinámico de la ruta /receta/:id

  if (loading) return <Loader />;
  if (error) return <ErrorMensaje mensaje={error} />;

  const receta = recetas.find((r) => r.id === Number(id));

  if (!receta) {
    return (
      <div className="estado">
        <h2>Esa receta no existe</h2>
        <p>Puede que el enlace esté mal escrito.</p>
        <Link to="/" className="boton">Ver todas las recetas</Link>
      </div>
    );
  }

  return <RecetaDetalle receta={receta} />;
}
