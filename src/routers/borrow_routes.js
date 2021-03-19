const BorrowRputes = require('express').Router();
const BorrowController = require('../controllers/borrow_controllers')
const authMiddleware = require('../helpers/auth_middleware')

BorrowRputes.get("/",authMiddleware.checkLogin, BorrowController.getBorrow)
BorrowRputes.post("/", authMiddleware.checkLogin, BorrowController.postBorrow)

module.exports = BorrowRputes