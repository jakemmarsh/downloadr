var Q     = require('q'),
    File = require('../models/file');

exports.upload = function(req, res) {
    // var eventTitle = req.body.title,
    //     eventLocation = req.body.location,
    //     eventDescription = req.body.description,
    //     eventStart = req.body.start,
    //     eventEnd = req.body.end,
    //     eventCategory = req.body.category,
    //     eventCreator = req.body.creator,
    //     eventSchoolId = req.body.schoolId,
    //     file = new File({
    //         title: eventTitle,
    //         location: eventLocation,
    //         description: eventDescription,
    //         start: eventStart,
    //         end: eventEnd,
    //         category: eventCategory,
    //         creator: eventCreator,
    //         created: new Date(),
    //         schoolId: eventSchoolId
    //     });

    var saveFile = function(file) {
        var deferred = Q.defer();

        file.save(function (err, savedFile) {
            if (err) {
                deferred.reject(err.message);
            }
            else {
                deferred.resolve(savedEvent);
            }
        });

        return deferred.promise;
    }

    saveFile(event).then(function(data) {
        res.json(data);
    }, function(){
        res.send(500, 'failed to upload new file');
    });
};

exports.get = function(req, res) {
	var fileId = req.params.fileId;

    var findFile = function(reqFileId) {
        var deferred = Q.defer();

        File.find({ _id: reqFileId }, function (err, event) {
            if (err) {
                deferred.reject(err.message);
            }
            else {
                deferred.resolve(event);
            }
        });

        return deferred.promise;
    }

    findFile(fileId).then(function(data) {
        res.json(data);
    }, function() {
        res.send(500, 'failed to retrieve file by ID');
    });
};