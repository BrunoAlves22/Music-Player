const path = require("path");

module.exports = {
  home: (request, response) => {
    const pathHome = path.resolve(__dirname, "..", "views", "index.html");
    return response.sendFile(pathHome);
  },
};
