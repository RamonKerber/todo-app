const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },

  concluida: {
    type: Boolean,
    default: false,
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Task", TaskSchema);
