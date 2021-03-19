const userRoutes = require('express').Router();
const userControllers = require('../controllers/user_controllers')
const authMiddleware = require('../helpers/auth_middleware')
const uploadMiddleware = require('../helpers/uploadUser_middleware')

userRoutes.get("/",authMiddleware.checkLogin, userControllers.getUser)
userRoutes.get("/:id",authMiddleware.checkLogin, userControllers.getUserById)
userRoutes.post("/",authMiddleware.checkLogin,uploadMiddleware, userControllers.updateUser)
userRoutes.put("/",authMiddleware.checkLogin,uploadMiddleware, userControllers.updateUserData)
userRoutes.delete("/:id",authMiddleware.checkLogin, userControllers.deleteUser)

module.exports = userRoutes