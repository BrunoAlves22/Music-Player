const { Router } = require("express");
const { apiRoutes } = require("./api");
const { viewRoutes } = require("./views");

const routes = Router();

//Views routes
routes.use("/", viewRoutes);

//Api routes
routes.use("/api", apiRoutes);

module.exports = { routes };
