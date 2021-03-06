const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const resp = require('../helpers/respons');
const userRoutes = require("../routers/user_routes");

module.exports = {
    getUser: (req, res) => {
        prisma.users.findMany({
            include: {
                user_detail: true
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
    getUserById: (req, res) => {
        const id = Number(req.params.id)
        prisma.users.findUnique({
            where: {
                id: id
            },
            include: {
                user_detail : true
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
    updateUser: (req, res) => {
        const decodeIdUser = req.decodedToken.id
        const { body } = req;
        const newData = {
            ...body,
            ttl: new Date(body.ttl),
            usia: Number(body.usia),
            user_id : decodeIdUser,
            avatar : req.file.path
        }
        prisma.user_detail
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
    updateUserData: (req, res) => {
        const decodeIdUser = req.decodedToken.id
        const { body } = req;
        const newData = {
            ...body,
            ttl: new Date(body.ttl),
            usia: Number(body.usia),
            avatar : req.file.avatar
        }
        prisma.user_detail
            .updateMany({
                where : {
                    user_id: decodeIdUser
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
    deleteUser: (req, res) => {
        const decodeIdUser = req.decodedToken.id
        const { id } = req.params;
        // console.log(id);
        prisma.users
            .delete({
                where: {
                    user_id: decodeIdUser
                },
            })
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((err) => {
                resp.error(res, 500, err)
            });
    }
}