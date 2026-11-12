# Sabores de México

Recetario hecho con React + Vite. Los datos viven en `data/recetas.json` y las imágenes locales en `public/imagenes/`. Las imágenes se sirven directamente desde el mismo sitio, sin depender de servicios externos.

## Correr en local
```bash
npm install
npm run dev
```

## Publicar en Netlify
1. Sube el proyecto a un repositorio de GitHub.
2. En Netlify: **Add new site > Import from Git**, elige tu repo.
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Abre la URL de Netlify y comprueba que las recetas cargan.

El archivo `public/_redirects` evita el error 404 al recargar una ruta como `/receta/3`.
