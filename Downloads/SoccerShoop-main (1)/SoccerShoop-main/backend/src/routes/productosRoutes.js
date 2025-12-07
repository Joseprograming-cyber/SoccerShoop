const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController.js');


// Ruta para obtener todos los productos
router.get('/productos', productoController.getProductos);


module.exports = router;
