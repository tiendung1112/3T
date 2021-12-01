const express = require('express');
const router = express.Router();
const upload = require('../util/upload/category');

const categoryController = require('../app/controllers/CategoryController');


// newController index
router.get('/create', categoryController.create);
router.post('/store', upload.single('image'), categoryController.store);
router.get('/:slug', categoryController.show);

module.exports = router;                