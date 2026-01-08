const mysql = require('mysql2/promise');
const config = require('./config'); // Import file config vừa tạo

const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database
});
//test connect
pool.query('SELECT 1').then(() => {
  console.log('Kết nối Database thành công qua Config.');
}).catch((err) => {
  console.error('Lỗi kết nối db:', err);
});

module.exports = pool;