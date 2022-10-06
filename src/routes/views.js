const { Router } = require("express");
const viewsController = require("../controllers/views");

const viewRoutes = Router();

viewRoutes.get("/", viewsController.home);

module.exports = { viewRoutes };
