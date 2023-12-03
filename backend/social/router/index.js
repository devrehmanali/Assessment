const express = require("express");
const serviceRouter = express.Router();

serviceRouter.use("/user-profile", [], require("../controllers/UserProfile"));
serviceRouter.use(
  "/tenant-profile",
  [],
  require("../controllers/TenantProfile")
);

module.exports = serviceRouter;
