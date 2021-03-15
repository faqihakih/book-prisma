const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const resp = require('../helpers/respons')

module.exports = {
    postBorrow : (req, res) => {
        const {body} = req;
        const newBody = {
            ...body,
            book_id : Number(body.book_id),
            user_id : Number(body.user_id),
            start_date : new Date(body.start_date),
            end_date : new Date(body.end_date)
        }
        prisma.borrowing
            .create({
                data : newBody
            })
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((error) => {
                resp.error(res, 500, error)
            });
    },
    getBorrow : (req, res) => {
        prisma.borrowing
            .findMany({
                include : {
                    books : {
                        select : {
                            title : true
                        }
                    },
                    users : {
                        select : {
                            name : true
                        }
                    }
                }
            })
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((error) => {
                resp.error(res, 500, error)
            });
    }

}