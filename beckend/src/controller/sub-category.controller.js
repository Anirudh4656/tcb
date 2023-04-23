require('dotenv').config();
const router = require('express').Router(), ERROR_TYPES = require('../config/error'),
    db = require('../models'), { verifyToken } = require('../middlewares/admin-auth.middleware');

router.post('/create', verifyToken, async (req, res) => {
    try {
        res.status(ERROR_TYPES.ADDED_SUCESSFULLY.code).send({ success: true, data: await db.sub_category.create(req.body), path: '/admin/sub-category', message: ERROR_TYPES.ADDED_SUCESSFULLY.message, status: ERROR_TYPES.ADDED_SUCESSFULLY.status });
    } catch (error) {
        res.status(ERROR_TYPES.SERVER_ERROR.code).send({ success: false, data: '', message: ERROR_TYPES.SERVER_ERROR.message, status: ERROR_TYPES.SERVER_ERROR.status });
    }
});

router.get('/getAll', async (req, res) => {
    try {
        res.status(ERROR_TYPES.DATA_FOUND.code).send({ success: true, data: await db.sub_category.findAll(), message: ERROR_TYPES.DATA_FOUND.message, status: ERROR_TYPES.DATA_FOUND.status });
    } catch (error) {
        res.status(ERROR_TYPES.SERVER_ERROR.code).send({ success: false, data: '', message: ERROR_TYPES.SERVER_ERROR.message, status: ERROR_TYPES.SERVER_ERROR.status });
    }
});

router.put('/update/:id', verifyToken, async (req, res) => {
    try {
        await db.sub_category.update(req.body, { where: { id: req.params.id } });
        res.status(ERROR_TYPES.UPDATED_SUCESSFULLY.code).send({ success: true, data: '', path: '/admin/sub-category', message: ERROR_TYPES.UPDATED_SUCESSFULLY.message, status: ERROR_TYPES.UPDATED_SUCESSFULLY.status });
    } catch (error) {
        res.status(ERROR_TYPES.SERVER_ERROR.code).send({ success: false, data: '', message: ERROR_TYPES.SERVER_ERROR.message, status: ERROR_TYPES.SERVER_ERROR.status });
    }
});

router.delete('/delete/:id', verifyToken, async (req, res) => {
    try {
        await db.sub_category.destroy({ where: { id: req.params.id }, truncate: false });
        res.status(ERROR_TYPES.DELETED_SUCCESSFULLY.code).send({ success: true, data: '', message: ERROR_TYPES.DELETED_SUCCESSFULLY.message, status: ERROR_TYPES.DELETED_SUCCESSFULLY.status });
    } catch (error) {
        res.status(ERROR_TYPES.SERVER_ERROR.code).send({ success: false, data: '', message: ERROR_TYPES.SERVER_ERROR.message, status: ERROR_TYPES.SERVER_ERROR.status });
    }
});

module.exports = router;
