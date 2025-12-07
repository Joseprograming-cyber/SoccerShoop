const express = require('express');
const app = express();
require('dotenv').config();

// Importar rutas
const productosRoutes = require('./src/routes/productosRoutes');

// Middleware para leer JSON
app.use(express.json());

// Usar las rutas
app.use('/', productosRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
