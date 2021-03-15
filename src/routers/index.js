const mainRoutes = require("express").Router();
const booksRoutes = require("./book_routes");
const authRoute = require('./auth_routes');
const categoryRoute = require('./category_routes');
const userRoute = require('./user_routes');
const ratingRoute = require('./rating_routes');
const searchingRoute = require('./searching_routes');
const discussionRoute = require('./discussion_routes');
const borrowRoute = require('./borrow_routes');

mainRoutes.use("/auth", authRoute);
mainRoutes.use("/books", booksRoutes);
mainRoutes.use("/category", categoryRoute);
mainRoutes.use("/user", userRoute);
mainRoutes.use("/rating", ratingRoute);
mainRoutes.use("/search", searchingRoute);
mainRoutes.use("/discuss", discussionRoute);
mainRoutes.use("/borrow", borrowRoute);

module.exports = mainRoutes;