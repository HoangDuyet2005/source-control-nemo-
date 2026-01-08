require('dotenv').config();

const config = {
  // Cấu hình Server
  app: {
    port: process.env.PORT || 8080,
    env: process.env.NODE_ENV || 'development'
  },
  
  // Cấu hình Database (Kết nối với nemodb)
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD, // Lấy từ file .env
    database: process.env.DB_NAME || 'nemodb'
  },

  // Giả sử sau này tích hợp CoreGW
  vietTel: {
    apiKey: process.env.VIETTEL_API_KEY,
    apiUrl: process.env.VIETTEL_API_URL
  }
};

module.exports = config;