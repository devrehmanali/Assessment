require("dotenv").config();

const express = require("express");
// const { initConsumer } = require('./utilities/consumer');
const { initProducer } = require("./utilities/producer");
// const { connectConsumer } = require('./utilities/consumer');
// const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
const db = require("./config/DbConfig");
const objectionConfig = require("./config/OrmConfig");
const serviceRouter = require("./router");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/social", serviceRouter);

app.use("/", async (req, res) => {
  res
    .status(200)
    .json({ message: `App is running on port. ${process.env.PORT || 4000}` });
});

app.listen(process.env.PORT || 4000, async () => {
  console.log("Server started at port", process.env.PORT || 4000);
  await initProducer();
});
