import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="encabezado">
      <div className="banderines" aria-hidden="true" />
      <nav className="navbar contenedor" aria-label="Principal">
        <Link to="/" className="logo">Sabores de México</Link>
        <ul className="menu">
          <li><NavLink to="/" end>Recetas</NavLink></li>
          <li><NavLink to="/acerca">Acerca de</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
