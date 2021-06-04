module.exports = {
  HOST: 'db-dev',
  USER: 'user',
  PASSWORD: 'password',
  DB: 'dev-database',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  port: 5432
}
