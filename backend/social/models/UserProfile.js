const { Model } = require("objection");

class UserProfile extends Model {
  static get tableName() {
    return "user-profile";
  }
}

module.exports = UserProfile;
