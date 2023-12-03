const express = require("express");
const {
  getAllUserProfiles,
  createUserProfile,
  getUserProfileById,
  updateUserProfile,
  deleteUserProfile,
} = require("../services/UserProfile");
const serviceRouter = express.Router();

// Create
serviceRouter.post("/", async (req, res) => {
  try {
    // const { username, email } = req.body;
    console.log(req.body, "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    const newItem = await createUserProfile(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Read
serviceRouter.get("/", async (req, res) => {
  try {
    console.log(req, "1111111111111111111111111111111");
    const items = await getAllUserProfiles();
    console.log(
      items,
      "7777777777777777777777777777777777777777777777777777777777"
    );
    res.status(200).json(items);
  } catch (error) {
    console.error(error, "88888888888888888888888888888888888888888888888888");
    res.status(500).json({ error: "Internal Server Error" });
  }
});

serviceRouter.get("/:id", async (req, res) => {
  try {
    const items = await getUserProfileById(req.body.id);
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update
serviceRouter.put("/:id", async (req, res) => {
  try {
    // const { id, username, email } = req.body;
    const updatedItem = await updateUserProfile(req.body);
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
    await deleteUserProfile(id);
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = serviceRouter;
