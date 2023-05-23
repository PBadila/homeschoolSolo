require('dotenv').config()

module.exports = 
{
  "development": {
    "username": process.env.DEVELOPMENT_DATABSE_USER,
    "password": null,
    "database": process.env.DEVELOPMENT_DATABSE_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
