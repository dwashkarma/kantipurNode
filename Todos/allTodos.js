const express = require("express");
const router = express.Router();
const Todo = require("../TodoModel/todoSchema");

const createTodos = async (req, res) => {
  const { title, description } = req.body;
  const create = await Todo.create({
    title,
    description,
  });
  res.status(200).json(create);
  console.log(create);
};

const getTodos = async (req, res) => {
  const { title, description } = req.body;
  const result = await Todo.find({});
  res.status(200).json(result);
  console.log(result);
};

router.route("/create").post(createTodos);
router.route("/get").get(getTodos);

module.exports = router;
