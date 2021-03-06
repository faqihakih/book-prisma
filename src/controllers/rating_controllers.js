const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const resp = require('../helpers/respons')

module.exports = {
    getRating: (req, res) => {
        prisma.rating
            .groupBy({
                by: ["book_id"],
                count : {
                    rating : true
                },
                sum : {
                    rating : true
                },
                avg : {
                    rating : true
                }
            })
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((err) => {
                resp.error(res, 500, err)
            });
    },
    getRatingById: (req, res) => {
        const { id } = req.params;
        prisma.rating
            .groupBy({
                by: ["book_id"],
                where : {
                    book_id : Number(id)
                },
                count : {
                    rating : true
                },
                sum : {
                    rating : true
                },
                avg : {
                    rating : true
                }
            })
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((err) => {
                resp.error(res, 500, err)
            });
    },
    postRating : (req, res) => {
        const { body } = req;
        const newData = {
            ...body,
            rating : Number(body.rating),
            book_id : Number(body.book_id)
        }

        prisma.rating
            .create({
                data : newData
            })
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((err) => {
                resp.error(res, 500, err)
            });
    }
};