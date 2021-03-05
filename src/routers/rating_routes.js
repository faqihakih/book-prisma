const ratingRoutes = require("express").Router();
const ratingControllers = require("../controllers/rating_controllers");

ratingRoutes.get("/", ratingControllers.getRating);
module.exports = ratingRoutes;
