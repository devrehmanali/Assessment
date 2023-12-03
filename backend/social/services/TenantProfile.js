const TenantProfile = require("../models/TenantProfile");

async function getAllTennatProfiles() {
  return TenantProfile.query();
}

async function getTennatProfileById(id) {
  return TenantProfile.query().findById(id);
}

async function createTennatProfile(data) {
  return TenantProfile.query().insert({ ...data });
}

async function updateTennatProfile(data) {
  return TenantProfile.query()
    .findById(data.id)
    .patch({ ...data });
}

async function deleteTennatProfile(id) {
  return TenantProfile.query().deleteById(id);
}

module.exports = {
  getAllTennatProfiles,
  getTennatProfileById,
  createTennatProfile,
  updateTennatProfile,
  deleteTennatProfile,
};
