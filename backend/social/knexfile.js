module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "postgres",
      port: process.env.SOCIAL_DB_PORT || 5432,
      user: process.env.POSTGRES_USERNAME || "postgres",
      password: process.env.POSTGRES_PASSWORD || "postgres",
      database: process.env.SOCIAL_DB || "social",
      charset: "utf8",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
