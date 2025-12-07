const { obtenerProductos } = require('../models/productoModel');

// Controlador para obtener todos los productos
const getProductos = (req, res) => {
  obtenerProductos((error, resultados) => {
    if (error) {
      res.status(500).json({ mensaje: 'Error al obtener productos', error });
    } else {
      res.status(200).json(resultados);
    }
  });
};

module.exports = {
  getProductos
};
