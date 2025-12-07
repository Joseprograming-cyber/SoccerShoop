const db = require('../configuration/database');

// Obtener todos los productos
const obtenerProductos = (callback) => {
  const query = 'SELECT * FROM productos';
  db.query(query, (error, resultados) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, resultados);
    }
  });
};

module.exports = {
  obtenerProductos
};
