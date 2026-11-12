# Sabores de México

Recetario hecho con React + Vite. Los datos viven en `data/recetas.json` (15 recetas) y la app los consume desde la URL "raw" de GitHub, como si fuera una API.

## Correr en local
```bash
npm install
npm run dev
```

## Antes de entregar
1. Sube el proyecto a un repositorio público de GitHub.
2. Abre `data/recetas.json` en GitHub, pulsa **Raw** y copia la URL.
3. Pégala en `src/config.js` (`API_URL`), haz commit y push.
4. En Netlify: **Add new site > Import from Git**, elige tu repo.
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Abre la URL de Netlify y comprueba que las recetas cargan.

El archivo `public/_redirects` evita el error 404 al recargar una ruta como `/receta/3`.
