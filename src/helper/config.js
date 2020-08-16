const dotenv = require('dotenv')
dotenv.config()

// Back info
const port = process.env.PORT

// MySQL data
const mysql = require('mysql2')

const databaseCredentials = typeof process.env.CLEARDB_DATABASE_URL === 'string' ? (
  process.env.CLEARDB_DATABASE_URL
)
  : {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  }
const connection = mysql.createPool(databaseCredentials)

// // Test connection to the Database
connection.getConnection(err => {
  if (err) {
    console.error('Error connection database', err)
  } else {
    console.log('Database is connected')
  }
})

// JWT Secret
const secret = process.env.JWT_SECRET

// Export
module.exports = {
  port, // Possible to pass object (port : process.env.PORT)
  connection,
  secret
}