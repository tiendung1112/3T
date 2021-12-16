const express = require('express');
const router = express.Router();
const upload = require('../util/upload/music');

const musicController = require('../app/controllers/MusicController');


// newController index
router.get('/get',musicController.list);
router.get('/create', musicController.create);
router.post('/store', upload.single('audio'), musicController.store);
router.get('/:slug', musicController.show);

module.exports = router;                