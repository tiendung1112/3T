//connect csdl
const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb+srv://NguyenCongTien:Traitre12345@cluster0.bsmzr.mongodb.net/3TMUSIC', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect fully');
    } catch (error) {
        console.log('Error connecting');
    }

}

module.exports = { connect };