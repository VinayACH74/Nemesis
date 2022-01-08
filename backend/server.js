const express = require("express");
const dotenv = require("dotenv");
const cookies = require("cookie-parser");
const app = express();
const path = require("path");


dotenv.config({ path: "./config.env" });
require("./db/conn");

app.use(cookies());
app.use(express.json());
app.use("/", require("./router/adminAuth"));

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });
  