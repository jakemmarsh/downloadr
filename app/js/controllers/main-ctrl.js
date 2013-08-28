define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('mainCtrl', function ($scope) {
    	$scope.uploadFile = function() {
    		console.log('upload');
    		console.log($scope.file);
    	}
    });
});