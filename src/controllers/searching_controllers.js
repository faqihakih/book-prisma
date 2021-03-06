const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const resp = require('../helpers/respons')

module.exports = {
    searchBooks: (req, res) => {
        const { searching } = req.body;

        prisma.books
            .findMany({
                where: {
                    OR: [
                        {
                            title: {
                                startsWith: searching,
                            },
                        },
                        {
                            title: {
                                endsWith: searching
                            }
                        },
                    ],
                }
            })
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((err) => {
                resp.error(res, 500, err)
            });
    },
    searchBooksById: (req, res) => {
        const { searching } = req.body;
        // console.log(searching);
        prisma.category
            .findMany({
                include : {
                    books : true
                },
                where : {
                    OR: [
                        {
                            name_category: {
                                startsWith: searching,
                            },
                        },
                        {
                            name_category: {
                                endsWith: searching
                            }
                        },
                    ],
                }
            })
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((err) => {
                resp.error(res, 500, err)
            });
    }
}