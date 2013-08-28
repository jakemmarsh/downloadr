define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('downloadCtrl', function ($scope, $stateParams, File, promisedFile) {
    	console.log(promisedFile);

    	$scope.fileId = $stateParams.fileId;
    });
});