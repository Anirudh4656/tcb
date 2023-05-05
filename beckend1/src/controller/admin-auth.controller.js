require('dotenv').config();
const { sign } = require('jsonwebtoken'), { hash, compareSync } = require('bcryptjs'),
    router = require('express').Router(), multer = require('multer'),
    ERROR_TYPES = require('../config/error'), db = require('../models'), { verifySignUp } = require('../middlewares/admin-auth.middleware'),
    MIME_TYPE_MAP = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/jpg': 'jpg' };

router.post('/register', require('../middlewares/validations/registration.validation'),
    verifySignUp, async (req, res) => {
        req.body.password = await hash(req.body.password, 12);
        try {
            let fileURL = `${req.protocol}://${req.get('host')}/api/images/profile/default_dp.svg`;
            res.status(ERROR_TYPES.ADDED_SUCESSFULLY.code).send({ success: true, data: await db.AdminUser.create({ ...req.body, image: fileURL }), path: '/admin/admin-details', message: ERROR_TYPES.ADDED_SUCESSFULLY.message, status: ERROR_TYPES.ADDED_SUCESSFULLY.status });
        } catch (error) {
            res.status(ERROR_TYPES.SERVER_ERROR.code).send({ success: false, data: '', message: ERROR_TYPES.SERVER_ERROR.message, status: ERROR_TYPES.SERVER_ERROR.status });
        }
    }
);

router.post('/login', async (req, res, next) => {
    try {
        let admin = await db.AdminUser.findOne({ where: { emailId: req.body.emailId } });
        if (!admin) {
            return res.status(ERROR_TYPES.USER_NOT_PRESENT.code).send({ success: false, data: {}, message: ERROR_TYPES.USER_NOT_PRESENT.message, status: ERROR_TYPES.USER_NOT_PRESENT.status });
        }
        if (!compareSync(req.body.password, admin.password)) {
            return res.status(ERROR_TYPES.PASSWORD_MISSMATCH.code).send({ success: false, data: {}, message: ERROR_TYPES.PASSWORD_MISSMATCH.message, status: ERROR_TYPES.PASSWORD_MISSMATCH.status });
        }
        const token = sign({ id: admin.id }, process.env.SECRET, { expiresIn: '5hr' });
        res.status(ERROR_TYPES.LOGIN_SUCCESSFULL.code).send({ success: true, path: '/admin/admin-details', data: { username: admin.name, accessToken: token, expiresIn: 5 * 60 * 60 * 1000 }, message: ERROR_TYPES.LOGIN_SUCCESSFULL.message, status: ERROR_TYPES.LOGIN_SUCCESSFULL.status });
    } catch (error) {
        res.status(ERROR_TYPES.SERVER_ERROR.code).send({ success: false, data: {}, message: ERROR_TYPES.SERVER_ERROR.message, status: ERROR_TYPES.SERVER_ERROR.status });
    }
});

module.exports = router;
