module.exports = {
    success: (res, msg, status, data) => {
        res.status(status).send({
            msg,
            status,
            data,
        });
    },
    error: (res, status, err) => {
        res.status(status).send({
            msg: "Error",
            status,
            err,
        });
    },
};