const config = require("./utils/config");
const express = require("express");
require("express-async-errors");
const app = express();
const notesRouter = require("./controllers/notes");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");
const mongoose = require("mongoose");

logger.info("Connecting to", config.MONGODB_URI);
logger.info("NODE ENV:", process.env.NODE_ENV);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("Connected to MongoDB");
  })
  .catch((error) => {
    logger.error("Error connecting to MongoDB:", error.message);
  });

app.use(express.json()); // JSON parser takes JSON data of req and turns it into JS object attachd to req.body
app.use(middleware.requestLogger);

app.use("/api/notes", notesRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
