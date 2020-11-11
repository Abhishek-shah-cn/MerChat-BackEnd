const express = require("express");
const app = express();

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/user", require("./routes/user"));

// SetUping the Error Handling
const errorHandlers = require("./handlers/errorHandler");
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if (process.env.ENV === "DEVELOPMENT") {
  app.use(errorHandlers.productionErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

module.exports = app;
