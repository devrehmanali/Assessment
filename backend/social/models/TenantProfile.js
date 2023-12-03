const { Model } = require("objection");

class TenantProfile extends Model {
  static get tableName() {
    return "tenant-profile";
  }
}

module.exports = TenantProfile;
