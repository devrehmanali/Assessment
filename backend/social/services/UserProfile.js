const UserProfile = require("../models/UserProfile");

async function getAllUserProfiles() {
  return UserProfile.query();
}

async function getUserProfileById(id) {
  return UserProfile.query().findById(id);
}

async function createUserProfile(data) {
  return UserProfile.query().insert({ ...data });
}

async function updateUserProfile(data) {
  return UserProfile.query()
    .findById(data.id)
    .patch({ ...data });
}

async function deleteUserProfile(id) {
  return UserProfile.query().deleteById(id);
}

module.exports = {
  getAllUserProfiles,
  getUserProfileById,
  createUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
