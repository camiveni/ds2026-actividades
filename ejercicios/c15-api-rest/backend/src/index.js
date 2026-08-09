const express = require('express');
const libroRoutes = require('./routes/libro.routes');
const autorRoutes = require('./routes/autor.routes');

const app = express();

app.use(express.json());

app.use('/api/libros', libroRoutes);
app.use('/api/autores', autorRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});