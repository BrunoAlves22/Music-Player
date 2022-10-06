const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  return response.sendFile(path.resolve(__dirname, "pages", "index.html"));
});

app.listen(3030, () => {
  console.log("Api is running 3030");
});
