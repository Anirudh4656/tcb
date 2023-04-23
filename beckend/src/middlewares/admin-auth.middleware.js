require('dotenv').config();
const { verify } = require('jsonwebtoken'), db = require('../models'),
ERROR_TYPES = require('../config/error');

const verifySignUp = async (req, res, next) => {
    let user = await db.AdminUser.findOne({ where: { emailId: req.body.emailId } });
    if (user)
        return res.status(ERROR_TYPES.EMAIL_ID_ALREADY_EXITS.code).send({ success: false, data: '', message: ERROR_TYPES.EMAIL_ID_ALREADY_EXITS.message, status: ERROR_TYPES.EMAIL_ID_ALREADY_EXITS.status });
    next();
}

const verifyToken = (req, res, next) => {
    if (!req.headers.authorization)
        return res.status(ERROR_TYPES.FORBIDDEN.code).send({ success: false, data: {}, message: ERROR_TYPES.FORBIDDEN.message, status: ERROR_TYPES.FORBIDDEN.status });
    const headerAuthToken = req.headers.authorization.split(' ');
    if (headerAuthToken[0] !== process.env.BEARER)
        return res.status(ERROR_TYPES.FORBIDDEN.code).send({ success: false, data: {}, message: ERROR_TYPES.FORBIDDEN.message, status: ERROR_TYPES.FORBIDDEN.status });
    if (!headerAuthToken[1])
        return res.status(ERROR_TYPES.TOKEN_NOT_PROVIDED.code).send({ success: false, data: {}, message: ERROR_TYPES.TOKEN_NOT_PROVIDED.message, status: ERROR_TYPES.TOKEN_NOT_PROVIDED.status });
    verify(headerAuthToken[1], process.env.SECRET, err => {
        if (err)
            return res.status(ERROR_TYPES.UNAUTHORIZED.code).send({ success: false, data: {}, message: ERROR_TYPES.UNAUTHORIZED.message, status: ERROR_TYPES.UNAUTHORIZED.status });
        next();
    });
}

module.exports = { verifySignUp, verifyToken };
