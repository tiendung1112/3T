const Singer = require('../models/Singer');
const Music = require('../models/Music');
const {mutipleMongooseToObject} = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose')

class SingerController {

    //Get /singer/show

    show(req, res, next) {
        Singer.findOne({slug: req.params.slug})
            .then(singer => {
                Promise.all([Singer.findOne({ name: singer.name }), Music.find({ singer: singer.name }), Singer.find({ name: {$ne: singer.name} }) ])
                .then(([singer, musics, singers]) => 
                    res.render('singers/show', { 
                        singers: mutipleMongooseToObject(singers),
                        musics: mutipleMongooseToObject(musics),
                        singer: mongooseToObject(singer),
                    })
                )
            })
            .catch(next);
    }
   
   
    
    //Get /singer/create
    create(req, res,next){
        res.render('singers/create');
    }

    //Get /admin/singer/stored
    stored(req, res, next) {
        Singer.find({})
            .then(singers => res.render('singers/stored', {
                 singers: mutipleMongooseToObject(singers)
         }))
            .catch(next);
     }

     //Delete /admin/music/Delete
    destroy(req, res, next){
        Singer.deleteOne({ slug: req.params.slug})
            .then(() => res.redirect('back'))
            .catch(next);
    }
   
    //POST /singer/store
    store(req, res,next){
        const formData = {...req.body };
        formData.image = req.file.path.slice(req.file.path.search("uploads")).split("\\").join("/")
        const singer = new Singer(formData);
        singer.save()
            .then(() => res.redirect('/admin'))
            .catch(next);
    }
}


module.exports = new SingerController;