const jwt = require('jsonwebtoken');

module.exports = {
    checkLogin : (req, res, next) => {
        const bearerToken = req.header('x-access-token').split(' ');
        // console.log(req.header('x-access-token'));
        // console.log(bearerToken);

        if (!bearerToken) {
            res.send({
                msg : "pls login frist",
                status : 401
            })
        }else{
            const token = req.header('x-access-token').split(' ')[1];
            try {
                const decodedToken = jwt.verify(token, "Akih");
                req.decodedToken = decodedToken
                next();
            } catch (error) {
                res.send({
                    msg : "Invalid Token",
                    status : 403
                })
            }
        }
    }
}