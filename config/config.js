require('dotenv').config()
module.exports = {
  development: {
    database: 'group_goal',
    dialect: 'postgres',

  },
  test: {
    database: 'group_goal',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}


// username: "postgres",
// password: "1234"


// {
//   "development": {
//     "username": "postgres",
//     "password": "1234",
//     "database": "group_goal",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "test": {
//     "username": "postgres",
//     "password": "1234",
//     "database": "group_goal",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "group_goal",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   }
// }
