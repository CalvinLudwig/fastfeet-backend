module.exports = {
  dialect: 'postgres',
  hostname: 'localhost',
  port: 54321,
  username: 'postgres',
  password: 'docker',
  database: 'fastfeet',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true
  }
}
