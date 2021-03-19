const multer = require('multer');
const path = require('path');
const resp = require('./respons')

const storege = multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, './public/user_images')
    },
    filename : (req, file, callback) => {
        console.log(file);
        const nameFormat = `${Date.now()}-${file.fieldname}${path.extname(file.originalname)}`;
        callback(null, nameFormat);
    }
});

const upload = multer({
    storage : storege,
    limits : 2 * 1000 * 1000
})

const singleUpload = (req, res, next) => {
    const uploadBook = upload.single("avatar");
    uploadBook(req, res, (err) => {
        if (err){
            resp.error(res, 500, err)
        }else{
            next()
        }
    })
}
module.exports = singleUpload;