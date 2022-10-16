const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// database configurations
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hi9ss56r",
  database: "notesapp",
});

connection.connect(() => {
  console.log("Connected to the database!");
});

app.get("/api/notes", (request, response) => {
  connection.query("SELECT * FROM notes", (error, allNotes) => {
    if (error) throw error;
    response.json(allNotes);
  });
});

app.post("/api/notes", (request, response) => {
  const body = request.body;
  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  } else {
    connection.query(
      `INSERT INTO notes (NoteContent) VALUES("${body.content}")`,
      (error, newNote) => {
        if (error) throw error;
        response.json(newNote);
      }
    );
  }
});

app.get("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  const noteContent = connection.query(
    `SELECT * from notes where Id = ${id}`,
    (error, noteContent) => {
      if (error) throw error;
      response.json(noteContent);
    }
  );
});

app.delete("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  connection.query(`DELETE from notes WHERE Id = ${id}`, (error, result) => {
    if (error) throw error;
    response.json(result);
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
