//Tạo table singer
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Singer = new Schema({
    name : String,
    image : String,
    description : String,
    id : String,
    slug : { type: String, slug: 'name', unique: true},
},{
    timestamp : true,
});

module.exports = mongoose.model('Singer', Singer);