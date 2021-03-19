const categoryRoutes = require('express').Router();
const categoryControllers = require('../controllers/category_controllers')
const authMiddleware = require('../helpers/auth_middleware')
const uploadMiddleware = require('../helpers/uploadCategory_middleware')

categoryRoutes.get("/", categoryControllers.getCategory)
categoryRoutes.get("/:id", categoryControllers.getCategoryById)
categoryRoutes.post("/",authMiddleware.checkLogin,uploadMiddleware,categoryControllers.postCategory)
categoryRoutes.put("/:id",authMiddleware.checkLogin, uploadMiddleware, categoryControllers.updateCategory)
categoryRoutes.delete("/:id",authMiddleware.checkLogin, categoryControllers.deleteCategory)

module.exports = categoryRoutes