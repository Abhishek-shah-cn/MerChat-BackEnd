const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  chatroom: {
    type: mongoose.Schema.Types.ObjectId,
    required: "chatroom Required!",
    ref: "Chatroom",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: "chatroom Required!",
    ref: "User",
  },
  message: {
      type:String,
      required:"Message is required!"
  }
});

module.exports = mongoose.model("Message", messageSchema);
