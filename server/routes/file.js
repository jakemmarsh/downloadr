var Q        = require('q'),
    fs       = require('fs'),
    mongo    = require('mongodb'),
    Grid     = require('gridfs-stream');

exports.upload = function(req, res) {
    var db = new mongo.Db('downloadr', new mongo.Server("127.0.0.1", 27017, {}), {safe: false, strict: false});

    db.open(function (err) {
        if (err) return handleError(err);

        var gfs         = Grid(db, mongo),
            tempfile    = req.files.file.path,
            origname    = req.files.file.name,
            writestream = gfs.createWriteStream({ filename: origname });
        
        // open a stream to the temporary file created by Express
        fs.createReadStream(tempfile)
        .on('error', function() {
            res.send(500, 'failed to upload a file.');
        })
        .pipe(writestream);

        // respond with uploaded file data upon success
        writestream.on('close', function (file) {
            console.log(file);
            res.json(file);
        });
    });
};

exports.get = function(req, res) {
    var db = new mongo.Db('downloadr', new mongo.Server("127.0.0.1", 27017, {}), {safe: false, strict: false});

    db.open(function (err) {
        if (err) return handleError(err);
        var gfs = Grid(db, mongo);

        gfs
        // create a read stream from gfs...
        .createReadStream({ _id: req.param('fileId') })
        .on('error', function() {
            res.send(500, 'failed to retrieve file.');
        })
        // and pipe it to Express' response
        .pipe(res);  
    });
};