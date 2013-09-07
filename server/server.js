var path     = require('path'),
    express  = require('express'),
    app      = express(),
    mongo    = require('mongodb'),
    Grid     = require('gridfs-stream'),
    routes   = require(path.join(__dirname, 'routes'));

var db = new mongo.Db('downloadr', new mongo.Server("127.0.0.1", 27017, {}), {safe: false, strict: false});

db.open(function (err) {
  if (err) return handleError(err);
  var gfs = Grid(db, mongo);
});

app.configure(function() {
    app.use(express.logger('dev'));
    app.use(express.compress());
    app.use(express.methodOverride());
    app.use(express.bodyParser());

    // serve all asset files from necessary directories
    app.use("/js", express.static(__dirname + "/../app/js"));
    app.use("/img", express.static(__dirname + "/../app/img"));
    app.use("/css", express.static(__dirname + "/../app/css"));
    app.use("/partials", express.static(__dirname + "/../app/partials"));

    // RESTful endpoints for files
    app.post('/api/files/', routes.file.upload);
    app.get('/api/files/:fileId', routes.file.get);

    // serve index.html for all remaining routes, in order to leave routing up to angular
    app.all("/*", function(req, res, next) {
        res.sendfile("index.html", { root: __dirname + "/../app" });
    });
    app.use(express.errorHandler({
        dumpExceptions: true, 
        showStack: true
    }));
});

app.listen(process.env.PORT || 3000);
