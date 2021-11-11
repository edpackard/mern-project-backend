const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const Note = require("../models/note");
const initialNotes = [
  { content: "HTML is easy", date: new Date(), important: false },
  {
    content: "Browser can only execute Javascript",
    date: new Date(),
    important: true,
  },
];

beforeEach(async () => {
  await Note.deleteMany({}); // clear out DB
  let noteObject = new Note(initialNotes[0]);
  await noteObject.save();
  noteObject = new Note(initialNotes[1]);
  await noteObject.save();
});

test("notes are returned as json", async () => {
  await api
    .get("/api/notes")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("there are two notes", async () => {
  const response = await api.get("/api/notes");
  expect(response.body).toHaveLength(initialNotes.length);
});

test("specific notes are within returned notes", async () => {
  const response = await api.get("/api/notes");
  const contents = response.body.map((r) => r.content);
  expect(contents).toContain("HTML is easy");
  expect(contents).toContain("Browser can only execute Javascript");
});

afterAll(() => {
  mongoose.connection.close();
});
