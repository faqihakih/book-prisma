const userRoutes = require('express').Router();
const userControllers = require('../controllers/user_controllers')
const authMiddleware = require('../helpers/auth_middleware')

userRoutes.get("/",authMiddleware.checkLogin, userControllers.getUser)
userRoutes.get("/:id",authMiddleware.checkLogin, userControllers.getUserById)
userRoutes.post("/:id",authMiddleware.checkLogin, userControllers.updateUser)
userRoutes.put("/:id",authMiddleware.checkLogin, userControllers.updateUserData)
userRoutes.delete("/:id",authMiddleware.checkLogin, userControllers.deleteUser)

module.exports = userRoutes