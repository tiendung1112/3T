const Music = require('../models/Music');
const {mutipleMongooseToObject} = require('../../util/mongoose');

class MusicController {

    //Get /musics/:slug
    show(req, res, next) {
        Music.findOne({slug: req.params.slug})
            .then(musics =>{
                res.render('musics/show');
            })
            .catch(next);

    }

    //Get /music/create
   create(req, res,next){
       res.render("musics/create");
   }
   
   
    //POST /music/store
    store(req, res,next){
        const formData = {...req.body };
        formData.audio = req.file.path.split('\\').slice(5).join('/');
        const music = new Music(formData);
        music.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
}


module.exports = new MusicController;