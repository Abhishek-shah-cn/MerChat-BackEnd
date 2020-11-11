const mongoose = require("mongoose");

const chatroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name Required!",
  },
});

module.exports = mongoose.model("Chatroom", chatroomSchema);
