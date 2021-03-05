const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const resp = require('../helpers/respons')

module.exports = {
    getRating: (req, res) => {
        prisma.rating
            .groupBy({
                by: ["book_id"]
            })
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((err) => {
                resp.error(res, 500, err)
            });
    },
};