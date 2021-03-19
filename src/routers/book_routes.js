const BookRoutes = require('express').Router();
const BoooksControllers = require('../controllers/book_controllers')
const authMiddleware = require('../helpers/auth_middleware')
const uploadMiddleware = require('../helpers/uploadBook_middleware')

BookRoutes.get("/", BoooksControllers.getBooks)
BookRoutes.get("/:id", BoooksControllers.getBooksById)
BookRoutes.post("/", 
authMiddleware.checkLogin,
uploadMiddleware,BoooksControllers.postBooks)
BookRoutes.put("/:id",authMiddleware.checkLogin, uploadMiddleware, BoooksControllers.updateBooks)
BookRoutes.delete("/:id",authMiddleware.checkLogin, BoooksControllers.deleteBooks)

module.exports = BookRoutes