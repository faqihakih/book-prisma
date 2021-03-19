const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const resp = require('../helpers/respons')

module.exports = {
    getDiscussion : (req, res) => {
        console.log(req.params);
        prisma.discuss
            .findMany({
                where : {
                    book_id : Number(req.params.book_id)
                },
                include : {
                    users: {
                        include : {
                            user_detail : true
                        }
                    },
                }
            })
            .then((data) => {
                resp.success(res, "success", 200, data)
            })
            .catch((err) => {
                resp.error(res, 500, err)
            })
    },
    postDiscussion : (req, res) => {
        const decodeIdUser = req.decodedToken.id
        const {body} = req;
        const newBody = {
            ...body,
            book_id : Number(body.book_id),
            user_id : decodeIdUser
        }
        prisma.discuss
            .create({
                data : newBody
            })
            .then((data) => {
                resp.success(res,"success", 200, data)
            })
            .catch((error) => {
                resp.error(res, 500, error)
            });
    }

}