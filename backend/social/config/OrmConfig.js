const { Model } = require("objection");
const Knex = require("knex");
const knexConfig = require("../knexfile");
const environment = process.env.NODE_ENV || "development";
const knexInstance = Knex(knexConfig[environment]);

Model.knex(knexInstance);

// Export the configured models or x`any additional setup
module.exports = {
  // Add your models here if needed
};
