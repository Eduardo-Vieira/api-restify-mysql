const mysql = require('mysql')
/**
 * Serviço de comexão com o mysql
 */
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'mydb'
});

module.exports = connection