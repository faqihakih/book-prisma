const BookRoutes = require('express').Router();
const BoooksControllers = require('../controllers/book_controllers')
const authMiddleware = require('../helpers/auth_middleware')

BookRoutes.get("/", BoooksControllers.getBooks)
BookRoutes.get("/:id", BoooksControllers.getBooksById)
BookRoutes.post("/", BoooksControllers.postBooks)
BookRoutes.put("/:id", BoooksControllers.updateBooks)
BookRoutes.delete("/:id", BoooksControllers.deleteBooks)

module.exports = BookRoutes