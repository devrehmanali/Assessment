const express = require("express");
const {
  createTennatProfile,
  getAllTennatProfiles,
  getTennatProfileById,
  updateTennatProfile,
  deleteTennatProfile,
} = require("../services/TenantProfile");
const serviceRouter = express.Router();

// Create
serviceRouter.post("/", async (req, res) => {
  try {
    const { username, email } = req.body;
    const newItem = await createTennatProfile(username, email);
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Read
serviceRouter.get("/", async (req, res) => {
  try {
    const items = await getAllTennatProfiles();
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

serviceRouter.get("/:id", async (req, res) => {
  try {
    const items = await getTennatProfileById(req.body.id);
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update
serviceRouter.put("/:id", async (req, res) => {
  try {
    const { id, username, email } = req.body;
    const updatedItem = await updateTennatProfile(id, username, email);
    res.status(200).json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete
serviceRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.body;
    await deleteTennatProfile(id);
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = serviceRouter;
