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

const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });
  