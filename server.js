const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// Servir los archivos estáticos desde el directorio raíz
app.use(serveStatic(path.join(__dirname, '.'), {
  index: ['index.html', 'index.htm']
}));

// Puerto y host para servir la aplicación
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Iniciar el servidor
app.listen(PORT, HOST, () => {
  console.log(`Servidor web estático de PrehistoriaMC ejecutándose en http://${HOST}:${PORT}`);
  console.log('Presiona Ctrl+C para detener el servidor');
});