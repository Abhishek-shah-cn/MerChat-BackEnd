require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection ERROR:" + err.message);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});

const app = require("./app");
const port = 8000;

app.listen(port, function (err) {
  console.log("server is runing on port:-" + port);
});
