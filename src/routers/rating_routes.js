const ratingRoutes = require("express").Router();
const ratingControllers = require("../controllers/rating_controllers");
const authMiddleware = require('../helpers/auth_middleware')

ratingRoutes.get("/", ratingControllers.getRating);
ratingRoutes.get("/:id", ratingControllers.getRatingById);
ratingRoutes.post("/",

authMiddleware.checkLogin,

ratingControllers.postRating);
module.exports = ratingRoutes;
