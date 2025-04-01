# PrehistoriaMC - Sitio Web Estático

Este es el sitio web estático del servidor de Minecraft PrehistoriaMC. Ha sido diseñado para funcionar completamente sin servidor - sólo necesitas abrir los archivos HTML en cualquier navegador web.

## Características

- Sitio web completamente estático que funciona sin servidor web
- Diseño responsivo que se adapta a dispositivos móviles y de escritorio
- Tema visual inspirado en Minecraft con toques prehistóricos
- Navegación intuitiva entre páginas
- Página de comandos con filtrado por rango y búsqueda
- Páginas de información y reglas con diseño atractivo

## Cómo usar

1. Descarga todos los archivos del sitio web
2. Haz doble clic en `index.html` para abrir la página principal
3. Navega por el sitio usando los enlaces en la barra de navegación

## Estructura de archivos

```
web-estatica/
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
└── README.md            # Este archivo
```

## Modificación

Si deseas modificar el sitio web:

- Para cambiar el contenido, edita los archivos HTML
- Para ajustar estilos, modifica los archivos CSS
- Para cambiar la funcionalidad, edita los archivos JavaScript

### Añadir comandos

Para añadir o editar comandos, modifica el array `COMMANDS` en el archivo `js/comandos.js`.

## Navegadores compatibles

El sitio web funciona en todos los navegadores modernos:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## Créditos

Desarrollado por Antoniosillon para PrehistoriaMC
