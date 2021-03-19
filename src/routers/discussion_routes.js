const DiscussionRoutes = require('express').Router();
const DiscussionController = require('../controllers/discussion_controllers')
const authMiddleware = require('../helpers/auth_middleware')

DiscussionRoutes.get("/:book_id",
authMiddleware.checkLogin,
DiscussionController.getDiscussion)

DiscussionRoutes.post("/", 
authMiddleware.checkLogin, 
DiscussionController.postDiscussion)

module.exports = DiscussionRoutes