# LearnStream - Taller UX/UI

Implementación en React + Vite + Bootstrap de los patrones **FilterBar** y **CardSystem**.

## Requisitos cumplidos

- Arreglo JSON local con objetos de videos.
- Cards generadas dinámicamente con `.map()`.
- Grid responsivo con 3 tarjetas por fila en pantallas grandes.
- Filtros por área de conocimiento, formato y búsqueda textual.
- Estado centralizado de filtros con `useState`.
- Filtrado en tiempo real sin recargar la página.
- Mensaje amigable cuando no hay resultados.
- Historias de usuario incluidas.

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

Luego abre la URL que muestre Vite, normalmente:

```bash
http://localhost:5173
```

## Compilar producción

```bash
npm run build
```

## Historias de usuario

### HU01 - Filtrar por área de conocimiento
Como usuario de LearnStream, quiero filtrar las conferencias por área de conocimiento para encontrar contenidos relacionados con mis intereses profesionales.

**Criterios de aceptación:**
- El sistema muestra un selector con las áreas disponibles.
- Al seleccionar un área, solo se muestran las tarjetas que coinciden.
- Si no hay coincidencias, se muestra un mensaje amigable.

### HU02 - Buscar conferencias por texto
Como usuario de LearnStream, quiero escribir palabras clave en una barra de búsqueda para encontrar conferencias por título, ponente, área o nivel.

**Criterios de aceptación:**
- La búsqueda actualiza los resultados en tiempo real.
- La búsqueda no modifica el arreglo original de datos.
- La búsqueda no requiere recargar la página.

### HU03 - Filtrar por formato de video
Como usuario de LearnStream, quiero filtrar las conferencias por formato de archivo para encontrar contenidos compatibles con mis necesidades técnicas.

**Criterios de aceptación:**
- El sistema permite seleccionar entre `.mp4`, `.mov` y `DVR`.
- Las tarjetas visibles corresponden al formato seleccionado.
- El usuario puede limpiar los filtros y volver a ver todo el catálogo.
