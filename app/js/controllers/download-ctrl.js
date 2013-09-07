define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('downloadCtrl', function ($scope, $stateParams, promisedFile) {
    	console.log(promisedFile);
    	$scope.file = promisedFile;
    });
});