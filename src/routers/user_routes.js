const userRoutes = require('express').Router();
const userControllers = require('../controllers/user_controllers')
const authMiddleware = require('../helpers/auth_middleware')

userRoutes.get("/", userControllers.getUser)
userRoutes.get("/:id", userControllers.getUserById)
userRoutes.post("/:id", userControllers.updateUser)
userRoutes.put("/:user_id", userControllers.updateUserData)
userRoutes.delete("/:id", userControllers.deleteUser)

module.exports = userRoutes