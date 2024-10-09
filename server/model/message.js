const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  conversationId: {
    type: String,
  },
  sender: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Messages = mongoose.model("Messages", messageSchema);

module.exports = Messages;
