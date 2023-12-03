exports.up = function (knex) {
  return knex.schema.createTable("user-profile", function (table) {
    table.increments("id").primary();
    table.string("tanant_id");
    table.string("first_name");
    table.string("last_name");
    table.string("department");
    table.string("designation");
    table.string("image_url");
    table.string("city");
    table.string("country");
    table.string("bio");
    table.string("social_links");
    table.string("employee_id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user-profile");
};
