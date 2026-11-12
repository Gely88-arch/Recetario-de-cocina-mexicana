import { useState, useEffect } from "react";

// Custom hook reutilizable: recibe una URL y devuelve { data, loading, error }
export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function cargarDatos() {
      try {
        setLoading(true);
        setError(null);
        const respuesta = await fetch(url, { signal: controller.signal });
        if (!respuesta.ok) {
          throw new Error(`El servidor respondió con el código ${respuesta.status}`);
        }
        const json = await respuesta.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    cargarDatos();
    return () => controller.abort(); // limpieza al desmontar
  }, [url]);

  return { data, loading, error };
}
