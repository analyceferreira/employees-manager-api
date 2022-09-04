module.exports = {
  username: "postgres",
  password: 'supersenha',
  database: 'employees_manager',
  host: "127.0.0.1",
  dialect: "postgres",
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
