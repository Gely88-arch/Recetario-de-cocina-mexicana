import { Routes, Route } from "react-router-dom";
import recetas from "../data/recetas.json";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import DetallePage from "./pages/DetallePage";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";
import NoEncontrada from "./pages/NoEncontrada";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="contenedor">
        <Routes>
          <Route path="/" element={<Inicio recetas={recetas} loading={false} error={null} />} />
          <Route path="/receta/:id" element={<DetallePage recetas={recetas} loading={false} error={null} />} />
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
