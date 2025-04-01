# PrehistoriaMC - Sitio Web para GitHub Pages

Este es el sitio web estático del servidor de Minecraft PrehistoriaMC, preparado para su despliegue en GitHub Pages.

## Cómo desplegar en GitHub Pages

1. Ejecuta el script `deploy-to-gh-pages.sh` para generar los archivos en la carpeta `gh-pages`:
   ```bash
   ./deploy-to-gh-pages.sh
   ```

2. Crea un nuevo repositorio en GitHub.

3. Sube el contenido del directorio `gh-pages` a tu nuevo repositorio:
   ```bash
   cd gh-pages
   git init
   git add .
   git commit -m "Primera versión del sitio web"
   git remote add origin https://github.com/tu-usuario/tu-repositorio.git
   git push -u origin main
   ```

4. En GitHub, ve a la página de configuración de tu repositorio (Settings), luego a la sección "Pages".

5. En "Source", selecciona la rama `main` y la carpeta "/ (root)" y haz clic en "Save".

6. Espera unos minutos a que GitHub despliegue tu sitio web. Una vez desplegado, aparecerá una URL del tipo: `https://tu-usuario.github.io/tu-repositorio/`.

## Características

- Sitio web completamente estático que funciona sin servidor web
- Diseño responsivo que se adapta a dispositivos móviles y de escritorio
- Tema visual inspirado en Minecraft con toques prehistóricos
- Página de comandos con filtrado por rango y búsqueda
- Páginas de información y reglas

## Estructura de archivos

```
/ (root)
├── index.html           # Página principal
├── comandos.html        # Documentación de comandos con filtros
├── info.html            # Información del servidor
├── reglas.html          # Reglas del servidor
├── css/
│   ├── styles.css       # Estilos generales
│   └── comandos.css     # Estilos específicos para la página de comandos
├── js/
│   ├── main.js          # JavaScript principal
│   └── comandos.js      # JavaScript para la funcionalidad de comandos
└── .nojekyll            # Archivo para evitar el procesamiento de Jekyll
```

## Modificación

Si deseas modificar el sitio web:

1. Realiza tus cambios en la carpeta `web-estatica`
2. Ejecuta el script `deploy-to-gh-pages.sh` para generar una nueva versión en la carpeta `gh-pages`
3. Sube los cambios a tu repositorio en GitHub