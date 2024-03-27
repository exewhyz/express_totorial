const express = require("express");
const app = express();

app.use(express.json());

const notes = [
  {
    id: "1",
    title: "MERN",
    description: "This is a MERN Note",
  },
  {
    id: "2",
    title: "Cyber Security",
    description: "This is a Cyber Security Note",
  },
  {
    id: "3",
    title: "Compiler Design",
    description: "This is a Compiler Design Note",
  },
  {
    id: "4",
    title: "Python",
    description: "This is a Python Note",
  },
  {
    id: "5",
    title: "DSA",
    description: "This is a DSA Design Note",
  },
];

app.post("/notes", function (req, res) {
  res.status(200).json(notes);
});

app.post("/create-note", function (req, res) {
  let newNote = {};
  newNote.id = notes.length + 1;
  newNote.title = req.body.title;
  newNote.description = req.body.description;
  notes.push(newNote);
  res.status(201).json(notes);
});
app.put("/update-note/:id", function (req, res) {
  const noteId = req.params.id;
  res.status(200).send(noteId);
});
app.delete("/delete-note/:id", function (req, res) {
  const noteId = req.params.id;

  res.status(200).send(noteId);
});

app.listen(3000, function () {
  console.log("Server listening on http://localhost:3000");
});
