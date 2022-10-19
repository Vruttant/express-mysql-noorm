const express = require("express");
const router = express.Router();
const notes = require("../services/notes");

router.get("/", async (request, response, next) => {
  try {
    response.json(await notes.getAllNotes());
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/", async (request, response, next) => {
  try {
    const content = request.body.content;
    response.json(await notes.addNote(content));
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    response.json(await notes.getNote(request.params.id));
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:id", async (request, response, next) => {
  try {
    response.json(notes.deleteNote(request.params.id));
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = {
  router,
};
