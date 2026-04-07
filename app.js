const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("DB connected"))
  .catch(err => console.log(err));

const TaskSchema = new mongoose.Schema({
  id: Number,
  name: String,
  status: String
});

const Task = mongoose.model("Task", TaskSchema);

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
