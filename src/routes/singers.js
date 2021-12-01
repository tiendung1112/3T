const express = require('express');
const router = express.Router();
const upload = require('../util/upload/singer');

const singerController = require('../app/controllers/SingerController');


// newController index
router.get('/create', singerController.create);
router.post('/store', upload.single('image'), singerController.store);
router.get('/:slug', singerController.show);

module.exports = router;                