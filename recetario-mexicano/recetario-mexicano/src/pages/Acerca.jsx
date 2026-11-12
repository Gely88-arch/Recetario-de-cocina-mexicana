export default function Acerca() {
  return (
    <section className="pagina-texto">
      <h1>Acerca de este recetario</h1>
      <p>
        Sabores de México reúne 15 recetas tradicionales de distintas regiones del país.
        Es un proyecto final de React: los datos viven en un archivo JSON alojado en GitHub
        y la aplicación los consume como si fuera una API.
      </p>
      <h2>Tecnologías</h2>
      <ul>
        <li>React con Vite</li>
        <li>React Router para la navegación</li>
        <li>Hooks: useState, useEffect y un custom hook para la API</li>
        <li>Despliegue en Netlify</li>
      </ul>
    </section>
  );
}
