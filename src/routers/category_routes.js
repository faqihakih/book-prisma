const categoryRoutes = require('express').Router();
const categoryControllers = require('../controllers/category_controllers')

categoryRoutes.get("/", categoryControllers.getCategory)
categoryRoutes.get("/:id", categoryControllers.getCategoryById)
categoryRoutes.post("/", categoryControllers.postCategory)
categoryRoutes.put("/:id", categoryControllers.updateCategory)
categoryRoutes.delete("/:id", categoryControllers.deleteCategory)

module.exports = categoryRoutes