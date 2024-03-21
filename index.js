const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./Todos/allTodos");

app.use(express.json());
//Routes
app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/todos", router);

const Print = () => {
  console.log("connected to port 3000");
};
app.listen(3000, Print);

//MongoDb connection
mongoose
  .connect(
    "mongodb+srv://dwashkarma:dwashkarma@cluster0.dzezum1.mongodb.net/TodosKantipur?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(console.log("Connected to Mongoose"))
  .catch((err) => console.log("There is a error."));
