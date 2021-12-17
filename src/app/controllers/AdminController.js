const Musics = require('../models/Music');
const Singers = require('../models/Singer');
const Categorys = require('../models/Category');
const {mutipleMongooseToObject} = require('../../util/mongoose');

class AdminController {
    //Get
    index(req, res, next) {
        res.render('admin',);
    }
    

}


 module.exports = new AdminController;