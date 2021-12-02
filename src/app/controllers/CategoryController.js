const Category = require('../models/Category');
const Music = require('../models/Music');
const {mutipleMongooseToObject} = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose')

class CategoryController { 

    //Get /categorys/show
    show(req, res, next) {
        Category.findOne({slug: req.params.slug})
            .then(category => {
                Promise.all([Category.findOne({ name: category.name }), Music.find({ category: category.name }), Category.find({ name: {$ne: category.name} }) ])
                .then(([category, musics, categorys]) => 
                    res.render('categorys/show', { 
                        categorys: mutipleMongooseToObject(categorys),
                        musics: mutipleMongooseToObject(musics),
                        category: mongooseToObject(category),
                    })
                )
            })
            .catch(next);
    }

    //Get /category/create
   create(req, res,next){
       res.render("categorys/create");
   }
   
   
    //POST /music/store
    store(req, res,next){
        const formData = {...req.body };
        formData.image = req.file.path.slice(req.file.path.search("uploads")).split("\\").join("/")
        const category = new Category(formData);
        category.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
}


module.exports = new CategoryController;