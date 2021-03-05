const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const resp = require('../helpers/respons')

module.exports = {
    getCategory: (req, res) => {
        prisma.category.findMany()
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((err) => {
                resp.error(res, 500, err)
            })
    },
    getCategoryById: (req, res) => {
        const id = Number(req.params.id)
        prisma.category.findUnique({
            where: {
                id: id
            }
        })
            .then((data) => {
                if (!data) {
                    resp.success(res,"data tidak ada", 200, data)
                } else {
                    resp.success(res,"success", 200, data)
                }
            })
            .catch((err) => {
                resp.error(res, 500, err)
            })
    },
    postCategory: (req, res) => {
        const { body } = req;
        prisma.category
            .create({
                data: body
            })
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((error) => {
                resp.error(res, 500, err)
            });
    },
    updateCategory: (req, res) => {
        const { id } = req.params;
        const { body } = req;
        prisma.category
            .update({
                where: {
                    id: parseInt(id)
                },
                data: body
            })
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((error) => {
                resp.error(res, 500, err)
            });
    },
    deleteCategory: (req, res) => {
        const { id } = req.params;
        prisma.category
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