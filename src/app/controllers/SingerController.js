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
   
    //POST /singer/store
    store(req, res,next){
        const formData = {...req.body };
        formData.image = req.file.path.split('\\').slice(4).join('/');
        const singer = new Singer(formData);
        singer.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
}


module.exports = new SingerController;