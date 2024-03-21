const mongoose = require("mongoose");

let TodoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Todo = mongoose.model("TodoKantipur", TodoSchema);
module.exports = Todo;
