const Musics = require('../models/Music');
const Singers = require('../models/Singer');
const Categorys = require('../models/Category');
const {mutipleMongooseToObject} = require('../../util/mongoose');

class SiteController {
    //Get
    index(req, res, next) {
        Promise.all([Musics.find({}), Categorys.find({}), Singers.find({})])
            .then(([musics, categorys, singers]) => 
                res.render('home', { 
                    musics :mutipleMongooseToObject(musics),
                    categorys :mutipleMongooseToObject(categorys),
                    singers :mutipleMongooseToObject(singers),
               })
            )
            .catch(next);
    }
    
    //Get/search    
    search(req, res,next){
        Promise.all([Musics.find({ name: { $regex: req.query.name } }), Singers.find({ name: { $regex: req.query.name, $options: 'i' } })])
            .then(([musics, singers]) =>
                res.render('search', {
                    musics :mutipleMongooseToObject(musics),
                    singers :mutipleMongooseToObject(singers),
                })
            )
    }


}


 module.exports = new SiteController;