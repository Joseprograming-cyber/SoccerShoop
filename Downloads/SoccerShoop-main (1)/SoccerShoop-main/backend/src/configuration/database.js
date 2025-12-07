const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // pon tu contraseña si tienes una
  database: 'tienda_deportiva',
  port: 3306
});

connection.connect((error) => {
  if (error) {
    console.error('❌ Error de conexión a la base de datos:', error);
  } else {
    console.log('✅ Conexión exitosa a la base de datos');
  }
});

module.exports = connection;

