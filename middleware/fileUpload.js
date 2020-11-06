var aws = require('aws-sdk');
var multer = require('multer');
var multerS3 = require('multer-s3');


aws.config.update({
    secretAccessKey: 'Your Secret Access Key',
    accessKeyId: 'Your Access Key ID',
    region: 'us-east-1'
});

var s3 = new aws.S3();


const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'your-bucket-name',
        key: function(req, file, cb) {
            console.log(file);
            cb(null, `${Date.now()}-${file.originalname}`); //use Date.now() for unique file keys
        }
    })
});


module.exports = upload;