const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos (como imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Programacion Distribuida',
    university: 'Universidad Central del Ecuador',
    faculty: 'Facultad de Ingeniería y Ciencias Aplicadas',
    degree: 'Sistemas de Información',
    name: 'Tanya Alexandra Vaca Mena',
    studentId: 'SI8-002'
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});