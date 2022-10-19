var query = require("./db");

const getAllNotes = async () => {
  const results = await query(`SELECT * FROM notes`);
  return results;
};

const getNote = async (id) => {
  const results = await query(`
    SELECT * FROM notes WHERE NoteId = ${id}
    `);
  return results;
};

const addNote = async (content) => {
  const results = await query(
    `INSERT INTO notes (NoteContent) VALUES (${content})`
  );
};

const deleteNote = async (id) => {
  await query(`DELETE FROM notes WHERE NoteId = ${id}`);
};
