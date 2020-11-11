const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name Required!",
    },
    email: {
      type: String,
      required: "Email Required!",
      unique: true,
    },
    password: {
      type: String,
      required: "Password Required!",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
