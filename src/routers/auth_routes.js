const authRoute = require('express').Router();
const authContollers = require('../controllers/auth_controllers');

authRoute.post('/sign-up', authContollers.signUp);
authRoute.post('/sign-in', authContollers.signIn);

module.exports = authRoute;