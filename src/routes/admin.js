const express = require('express');
const router = express.Router();
const musicController = require('../app/controllers/MusicController');
const singerController = require('../app/controllers/SingerController');
const categoryController = require('../app/controllers/CategoryController');
const adminController = require('../app/controllers/AdminController');


// newController index
router.get('/musics/stored', musicController.stored);
router.get('/musics/create', musicController.create);
router.delete('/musics/:slug', musicController.destroy);
router.get('/singers/stored', singerController.stored);
router.get('/singers/create', singerController.create);
router.delete('/singers/:slug', singerController.destroy);
router.get('/categorys/stored', categoryController.stored);
router.get('/categorys/create', categoryController.create);
router.delete('/categorys/:slug', categoryController.destroy);
router.get('/', adminController.index);

module.exports = router;                