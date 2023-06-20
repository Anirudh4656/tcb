const express = require('express'), bodyParser = require('body-parser'),
    path = require('path'), app = express(), db = require('./models'),
    adminAuth = require('./controller/admin-auth.controller'),
    admin = require('./controller/admin.controller'),
    category = require('./controller/category.controller'),
    postType = require('./controller/post-type.controller'),
    get = require('./controller/post-type.controller'),
    posts = require('./controller/posts.controller'),
    subCategory = require('./controller/sub-category.controller'),
    typeCategory = require('./controller/type-category.controller'),
    ADMIN_URL = '/api/admin', PUBLIC_URL = '/api/public';

db.sequelize.sync().then(() => console.log('Drop and re-sync db'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/images', express.static('images'));

// Api for CORS to connect Angular with backend
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
});

// Admin Routes
app.use(`${ADMIN_URL}/auth`, adminAuth);
app.use(`${ADMIN_URL}/adminDetails`, admin);
app.use(`${ADMIN_URL}/category`, category);
app.use(`${ADMIN_URL}/sub_category`, subCategory);
app.use(`${ADMIN_URL}/type_category`, typeCategory);
app.use(`${ADMIN_URL}/post_type` , postType);
app.use(`${ADMIN_URL}`, get);

// Public Routes
app.use(`${PUBLIC_URL}/posts`, posts);

// Exporting the app to server.js
module.exports = app;
