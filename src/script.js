require("dotenv").config();

const express = require("express");
const { routes } = require("./routes");
const port = process.env.PORT || 3030;
const app = express();

app.use(express.static("public"));

app.use(routes);

app.listen(port, () => {
  console.log(`Api is running on ${port}`);
});
