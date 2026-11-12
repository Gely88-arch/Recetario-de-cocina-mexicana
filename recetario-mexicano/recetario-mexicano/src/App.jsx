import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { API_URL } from "./config";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import DetallePage from "./pages/DetallePage";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";
import NoEncontrada from "./pages/NoEncontrada";

export default function App() {
  // Se hace una sola petición al cargar la app y se comparte con las páginas por props
  const { data: recetas, loading, error } = useFetch(API_URL);

  return (
    <>
      <Navbar />
      <main className="contenedor">
        <Routes>
          <Route path="/" element={<Inicio recetas={recetas} loading={loading} error={error} />} />
          <Route path="/receta/:id" element={<DetallePage recetas={recetas} loading={loading} error={error} />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </main>
      <footer className="pie">
        <p>Sabores de México · Proyecto final de React</p>
      </footer>
    </>
  );
}
