const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Music = new Schema({
    name : String,
    singer : String,
    audio : String,
    lyric : String,
    category : String,
    id : String,
    slug : { type: String, slug: 'name', unique: true},
},{
    timestamp : true,
});

module.exports = mongoose.model('Music', Music);