db = db.getSiblingDB('tasks');

db.tasks.insertMany([
  { id: 1, name: "Task 1", status: "pending" },
  { id: 2, name: "Task 2", status: "done" }
]);
