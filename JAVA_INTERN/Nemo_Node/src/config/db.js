const mysql = require('mysql2/promise')
require('dotenv').config()
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'nemodb'
})
module.exports = pool
pool.query('SELECT *from mon_hoc').then(() => {
  console.log('Kết nối được.')
})
.catch((err) => {
  console.error('Dell kết nối được với db:', err)
})