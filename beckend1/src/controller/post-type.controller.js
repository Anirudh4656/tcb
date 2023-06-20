require('dotenv').config();
const router = require('express').Router(), ERROR_TYPES = require('../config/error'),
    db = require('../models'), { verifyToken } = require('../middlewares/admin-auth.middleware');

router.post('/create', async (req, res) => {
    try {
        res.status(ERROR_TYPES.ADDED_SUCESSFULLY.code).send({ success: true, data: await db.post_type.create(req.body), path: '/admin/post-type', message: ERROR_TYPES.ADDED_SUCESSFULLY.message, status: ERROR_TYPES.ADDED_SUCESSFULLY.status });
    } catch (error) {
        console.log(error);
        res.status(ERROR_TYPES.SERVER_ERROR.code).send({ success: false, data: '', message: ERROR_TYPES.SERVER_ERROR.message, status: ERROR_TYPES.SERVER_ERROR.status });
    }
});

router.get('/get', async (req, res) => {
  
        res.status(ERROR_TYPES.DATA_FOUND.code).send({ success: true, message: "working fine" });
});
router.get('/getAll', async (req, res) => {
    try {
        res.status(ERROR_TYPES.DATA_FOUND.code).send({ success: true, data: await db.post_type.findAll(), message: ERROR_TYPES.DATA_FOUND.message, status: ERROR_TYPES.DATA_FOUND.status });
    } catch (error) {
        res.status(ERROR_TYPES.SERVER_ERROR.code).send({ success: false, data: '', message: ERROR_TYPES.SERVER_ERROR.message, status: ERROR_TYPES.SERVER_ERROR.status });
    }
});

router.put('/update/:id', verifyToken, async (req, res) => {
    try {
        await db.post_type.update(req.body, { where: { id: req.params.id } });
        res.status(ERROR_TYPES.UPDATED_SUCESSFULLY.code).send({ success: true, data: '', path: '/admin/post-type', message: ERROR_TYPES.UPDATED_SUCESSFULLY.message, status: ERROR_TYPES.UPDATED_SUCESSFULLY.status });
    } catch (error) {
        res.status(ERROR_TYPES.SERVER_ERROR.code).send({ success: false, data: '', message: ERROR_TYPES.SERVER_ERROR.message, status: ERROR_TYPES.SERVER_ERROR.status });
    }
});

router.delete('/delete/:id', verifyToken, async (req, res) => {
    try {
        await db.post_type.destroy({ where: { id: req.params.id }, truncate: false });
        res.status(ERROR_TYPES.DELETED_SUCCESSFULLY.code).send({ success: true, data: '', message: ERROR_TYPES.DELETED_SUCCESSFULLY.message, status: ERROR_TYPES.DELETED_SUCCESSFULLY.status });
    } catch (error) {
        res.status(ERROR_TYPES.SERVER_ERROR.code).send({ success: false, data: '', message: ERROR_TYPES.SERVER_ERROR.message, status: ERROR_TYPES.SERVER_ERROR.status });
    }
});

module.exports = router;
