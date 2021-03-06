const searchingRoutes = require("express").Router();
const searchingControllers = require("../controllers/searching_controllers");

searchingRoutes.get("/", searchingControllers.searchBooks);
searchingRoutes.get("/category", searchingControllers.searchBooksById);
module.exports = searchingRoutes;
