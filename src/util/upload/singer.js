const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination:path.resolve(__dirname, '../../public/uploads/singer') ,
    filename: function(req, file, cb){
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

const upload = multer({ 
    storage: storage
})

module.exports = upload;