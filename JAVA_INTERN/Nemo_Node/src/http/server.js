const express = require('express')
const app = express()
app.use(express.json())
app.use('/', require('../routes/monhoc.route'))
app.listen(8080, () => {
  console.log('Chạy đê http://localhost:8080')
})
