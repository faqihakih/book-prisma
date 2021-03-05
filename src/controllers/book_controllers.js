const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const resp = require('../helpers/respons')

module.exports = {
    getBooks: (req, res) => {
        prisma.books.findMany({
            include: {
                category: {
                    select: {
                        name_category: true
                    }
                },
                users: {
                    select: {
                        name: true
                    }
                }
            }
        })
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    delete data[i].id_category
                    delete data[i].id_user
                }
                resp.success(res,"success", 200, data)
            })
            .catch((err) => {
                resp.error(res, 500, err)
            })
    },
    getBooksById: (req, res) => {
        const id = Number(req.params.id)
        prisma.books.findUnique({
            where: {
                id: id
            }
        })
            .then((data) => {
                if (!data) {
                    resp.success(res,"data tidak ada", 200)
                } else {
                    resp.success(res,"success", 200, data)
                }
            })
            .catch((err) => {
                resp.error(res, 500, err)
            })
    },
    postBooks: (req, res) => {
        const { body } = req;
        const newData = {
            ...body,
            id_category: Number(body.id_category),
            id_rating: Number(body.id_rating),
            id_user: Number(body.id_user)
        }
        prisma.books
            .create({
                data: newData
            })
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((error) => {
                resp.error(res, 500, err)
            });
    },
    updateBooks: (req, res) => {
        const { id } = req.params;
        const { body } = req;
        const newData = {
            ...body,
            id_category: Number(body.id_category),
            id_rating: Number(body.id_rating),
            id_user: Number(body.id_user)
        }
        prisma.books
            .update({
                where: {
                    id: parseInt(id)
                },
                data: newData
            })
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((error) => {
                resp.error(res, 500, err)
            });
    },
    deleteBooks: (req, res) => {
        const { id } = req.params;
        prisma.books
            .delete({
                where: {
                    id: parseInt(id)
                }
            })
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((error) => {
                resp.error(res, 500, err)
            });
    }
}