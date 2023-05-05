require('dotenv').config();
const router = require('express').Router(),
    multer = require('multer'),
    Op = require('sequelize').Op,
    ERROR_TYPES = require('../config/error'),
    db = require('../models'),
    { verifyToken } = require('../middlewares/admin-auth.middleware'),
    join_tables = [{
            model: db.post_type,
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        },
        {
            model: db.category,
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        },
        {
            model: db.sub_category,
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        },
        {
            model: db.type_category,
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        }
    ],
    include_columns = { exclude: ['category_id', 'post_type_id', 'sub_category_id', 'type_category_id'] },
    MIME_TYPE_MAP = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/jpg': 'jpg' };

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file) {
            const isValid = MIME_TYPE_MAP[file.mimetype];
            let error = new Error('Invalid image type');
            if (isValid) {
                error = null;
            }
            cb(error, 'images/posts');
        }
    },
    filename: (req, file, cb) => {
        if (file) {
            const name = file.originalname.toLowerCase().split(' ').join('');
            const ext = MIME_TYPE_MAP[file.mimetype];
            cb(null, `${name}${Date.now()}.${ext}`);
        }
    }
});

router.post('/create', verifyToken, multer({ storage: storage }).single('image'), async(req, res) => {
    try {
        let fileURL = `${req.protocol}://${req.get('host')}/api/images/posts/`;
        let fileName = 'default_post.svg';
        if (req.file) {
            fileName = req.file.filename;
        }
        fileURL = fileURL + fileName;
        req.body.youtube_video_link = req.body.youtube_video_link.replace('watch?v=', 'embed/');
        let response = await db.posts.create({...req.body, image: fileURL });
        res.status(ERROR_TYPES.ADDED_SUCESSFULLY.code).send({ success: true, data: await executeQuery(response.id), message: ERROR_TYPES.ADDED_SUCESSFULLY.message, status: ERROR_TYPES.ADDED_SUCESSFULLY.status });
    } catch (error) {
        console.log(error);
        res.status(ERROR_TYPES.SERVER_ERROR.code).send({ success: false, data: '', message: ERROR_TYPES.SERVER_ERROR.message, status: ERROR_TYPES.SERVER_ERROR.status });
    }
});

router.get('/getAll', async(req, res) => {
    try {
        let response = await db.posts.findAll({
            attributes: include_columns,
            include: join_tables,
            order: [
                ['views', 'DESC']
            ]
        });
        res.status(ERROR_TYPES.DATA_FOUND.code).send({ success: true, data: response, message: ERROR_TYPES.DATA_FOUND.message, status: ERROR_TYPES.DATA_FOUND.status });
    } catch (error) {
        console.error(error);
        res.status(ERROR_TYPES.SERVER_ERROR.code).send({ success: false, data: '', message: ERROR_TYPES.SERVER_ERROR.message, status: ERROR_TYPES.SERVER_ERROR.status });
    }
});

router.get('/get/:id', async(req, res) => {
    try {
        res.status(ERROR_TYPES.DATA_FOUND.code).send({ success: true, data: await executeQuery(req.params.id), message: ERROR_TYPES.DATA_FOUND.message, status: ERROR_TYPES.DATA_FOUND.status });
    } catch (error) {
        res.status(ERROR_TYPES.SERVER_ERROR.code).send({ success: false, data: '', message: ERROR_TYPES.SERVER_ERROR.message, status: ERROR_TYPES.SERVER_ERROR.status });
    }
});

router.get('/search/:keyword', async(req, res) => {
    try {
        res.status(ERROR_TYPES.DATA_FOUND.code).send({
            success: true,
            data: await db.posts.findAll({
                attributes: include_columns,
                include: join_tables,
                order: [
                    ['createdAt', 'DESC']
                ],
                where: {
                    title: {
                        [Op.like]: `%${req.params.keyword}%`
                    }
                }
            }),
            message: ERROR_TYPES.DATA_FOUND.message,
            status: ERROR_TYPES.DATA_FOUND.status
        });
    } catch (error) {
        res.status(ERROR_TYPES.SERVER_ERROR.code).send({ success: false, data: '', message: ERROR_TYPES.SERVER_ERROR.message, status: ERROR_TYPES.SERVER_ERROR.status });
    }
});

router.get('/updateView/:id', async(req, res) => {
    try {
        await db.posts.increment('views', { where: { id: req.params.id } });
        res.status(ERROR_TYPES.UPDATED_SUCESSFULLY.code).send({ success: true, data: {}, message: ERROR_TYPES.UPDATED_SUCESSFULLY.message, status: ERROR_TYPES.UPDATED_SUCESSFULLY.status });
    } catch (error) {
        res.status(ERROR_TYPES.SERVER_ERROR.code).send({ success: false, data: '', message: ERROR_TYPES.SERVER_ERROR.message, status: ERROR_TYPES.SERVER_ERROR.status });
    }
});

router.put('/update/:id', multer({ storage: storage }).single('image'), async(req, res) => {
    try {
        var fileURL = `${req.protocol}://${req.get('host')}/api/images/posts/`,
            request = req.body;
        let fileName = 'default_post.svg';
        if (req.file) {


            fileName = req.file.filename;
            console.log(fileName);
        }
        fileURL += fileName;
        request = {...request, image: fileURL };
        await db.posts.update(request, { where: { id: req.params.id } });
        res.status(ERROR_TYPES.UPDATED_SUCESSFULLY.code).send({ success: true, data: await executeQuery(req.params.id), message: ERROR_TYPES.UPDATED_SUCESSFULLY.message, status: ERROR_TYPES.UPDATED_SUCESSFULLY.status });
    } catch (error) {
        res.status(ERROR_TYPES.SERVER_ERROR.code).send({ success: false, data: '', message: ERROR_TYPES.SERVER_ERROR.message, status: ERROR_TYPES.SERVER_ERROR.status });
    }
});

router.delete('/delete/:id', verifyToken, async(req, res) => {
    try {
        await db.posts.destroy({ where: { id: req.params.id }, truncate: false });
        res.status(ERROR_TYPES.DELETED_SUCCESSFULLY.code).send({ success: true, data: '', message: ERROR_TYPES.DELETED_SUCCESSFULLY.message, status: ERROR_TYPES.DELETED_SUCCESSFULLY.status });
    } catch (error) {
        res.status(ERROR_TYPES.SERVER_ERROR.code).send({ success: false, data: '', message: ERROR_TYPES.SERVER_ERROR.message, status: ERROR_TYPES.SERVER_ERROR.status });
    }
});

const executeQuery = async(id) => {
    return await db.posts.findByPk(id, { attributes: include_columns, include: join_tables });
}

module.exports = router;