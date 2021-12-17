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

   //Get/admin/music/stored
   stored(req, res, next) {
       Music.find({})
        .then(musics => res.render('musics/stored', {
            musics: mutipleMongooseToObject(musics)
        }))
        .catch(next);
    }

    //Delete /admin/music/Delete
    destroy(req, res, next){
        Music.deleteOne({ slug: req.params.slug})
            .then(() => res.redirect('back'))
            .catch(next);
    }

   //Get /music/get
   list(req, res, next){
       Music.find({})
        .then(musics =>{
            res.json(musics);
        })
        .catch(next);
   }
   
   
    //POST /music/store
    store(req, res,next){
        const formData = {...req.body };
        formData.audio = req.file.path.slice(req.file.path.search("uploads")).split("\\").join("/")
        const music = new Music(formData);
        music.save()
            .then(() => res.redirect('/admin'))
            .catch(next);
    }
}


module.exports = new MusicController;