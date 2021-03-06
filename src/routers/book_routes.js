const BookRoutes = require('express').Router();
const BoooksControllers = require('../controllers/book_controllers')
const authMiddleware = require('../helpers/auth_middleware')

BookRoutes.get("/", BoooksControllers.getBooks)
BookRoutes.get("/:id", BoooksControllers.getBooksById)
BookRoutes.post("/",authMiddleware.checkLogin, BoooksControllers.postBooks)
BookRoutes.put("/:id",authMiddleware.checkLogin, BoooksControllers.updateBooks)
BookRoutes.delete("/:id",authMiddleware.checkLogin, BoooksControllers.deleteBooks)

module.exports = BookRoutes