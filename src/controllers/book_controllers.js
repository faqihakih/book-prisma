const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const resp = require('../helpers/respons')

module.exports = {
    getBooks: (req, res) => {
        const page = Number(req.body.pagination)
        const bookPage = 5;
        const offset = (page - 1) * bookPage
        prisma.books.findMany({
            take: bookPage,
            skip : offset,
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
        const decodeIdUser = req.decodedToken.id
        console.log(decodeIdUser);
        const { body } = req;
        const newData = {
            ...body,
            id_category: Number(body.id_category),
            id_user: decodeIdUser,
            cover : req.file.path
        }
        prisma.books
            .create({
                data: newData
            })
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((err) => {
                resp.error(res, 500, err)
            });
    },
    updateBooks: (req, res) => {
        const decodeIdUser = req.decodedToken.id
        const { id } = req.params;
        const { body } = req;
        const newData = {
            ...body,
            id_category: Number(body.id_category),
            cover : req.file.path,
            id_user: decodeIdUser
        }
        prisma.books
            .updateMany({
                where: {
                    id: parseInt(id),
                    id_user: decodeIdUser
                },
                data: newData
            })
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((err) => {
                resp.error(res, 500, err)
            });
    },
    deleteBooks: (req, res) => {
        const decodeIdUser = req.decodedToken.id
        const { id } = req.params;
        prisma.books
            .deleteMany({
                where: {
                    id: parseInt(id),
                    id_user: decodeIdUser
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