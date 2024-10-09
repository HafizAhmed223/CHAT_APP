const mongoose = require("mongoose");

const converstaionSchema = new mongoose.Schema({
  members: {
    type: Array,
    required: true,
  },
});

const Conversations = mongoose.model("Conversations", converstaionSchema);

module.exports = Conversations;
