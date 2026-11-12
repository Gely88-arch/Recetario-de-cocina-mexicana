import { useState } from "react";
import RecetaList from "../components/RecetaList";
import Loader from "../components/Loader";
import ErrorMensaje from "../components/ErrorMensaje";

export default function Inicio({ recetas, loading, error }) {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  if (loading) return <Loader />;
  if (error) return <ErrorMensaje mensaje={error} />;

  const categorias = ["Todas", ...new Set(recetas.map((r) => r.categoria))];

  const filtradas = recetas.filter((r) => {
    const coincideTexto = r.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === "Todas" || r.categoria === categoria;
    return coincideTexto && coincideCategoria;
  });

  return (
    <>
      <section className="hero">
        <h1>Recetas de todo México, paso a paso</h1>
        <p>{recetas.length} platillos tradicionales, desde antojitos hasta postres.</p>
      </section>

      <div className="filtros">
        <input
          type="search"
          placeholder="Buscar por nombre"
          aria-label="Buscar receta por nombre"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select
          aria-label="Filtrar por categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {categorias.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <RecetaList recetas={filtradas} />
    </>
  );
}
