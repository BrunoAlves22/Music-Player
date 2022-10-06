const { Router } = require("express");

const apiController = require("../controllers/api");

const apiRoutes = Router();

//http://localhost:3030/api/search

apiRoutes.get("/search", apiController.search);

module.exports = { apiRoutes };
