const express = require('express');
const authRoutes = require('./routes/auth.routes');
const libroRoutes = require('./routes/libro.routes');
const autorRoutes = require('./routes/autor.routes');
const { errorHandler } = require('./middlewares/error.middleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// rutas
app.use('/api/auth', authRoutes);
app.use('/api/libros', libroRoutes);
app.use('/api/autores', autorRoutes);

// ErrorHandler al final
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});