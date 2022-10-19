const express = require("express");
const cors = require("cors");
const app = express();
const noteRouter = require("./routes/notes");

app.use(cors());
app.use(express.json());
app.use("/api/notes/", noteRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
