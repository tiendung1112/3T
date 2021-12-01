const siteRouter = require('./site');
const musicsRouter = require('./musics');
const singersRouter = require('./singers');
const categorysRouter = require('./categorys');


function router(app) {

    app.use('/musics', musicsRouter);

    app.use('/singers', singersRouter);

    app.use('/categorys', categorysRouter);
    
    app.use('/', siteRouter);

}

module.exports = router;