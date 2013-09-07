var Q         = require('q'),
    fs        = require('fs'),
    mongo     = require('mongodb'),
    GridStore = require('mongodb').GridStore,
    ObjectID  = require('mongodb').ObjectID,
    Grid      = require('gridfs-stream');

var bytesToSize = function(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i == 0) return bytes + ' ' + sizes[i]; 
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
};

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
            db.close();
            res.json(file);
        });
    });
};

exports.getInfo = function(req, res) {
    var db = new mongo.Db('downloadr', new mongo.Server("127.0.0.1", 27017, {}), {safe: false, strict: false});

    db.open(function (err) {
        if (err) return handleError(err);
        var gridStore = new GridStore(db, new ObjectID(req.param('fileId')), 'r');

        gridStore.open(function(err, gridStore) {
            var fileInfo = {
                name: gridStore.filename,
                size: bytesToSize(gridStore.length),
                uploadDate: gridStore.uploadDate
            };
            res.json(fileInfo);
        });
    });
};

exports.download = function(req, res) {
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