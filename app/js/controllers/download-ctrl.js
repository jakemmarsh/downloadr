define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('downloadCtrl', function ($scope, $stateParams, promisedFile) {
    	$scope.file = promisedFile.data;
    	$scope.fileId = $stateParams.fileId;
    	$scope.file.uploadDate = new Date($scope.file.uploadDate).toDateString();
    });
});