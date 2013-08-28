define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('mainCtrl', function ($scope, File) {
    	$scope.fileUploaded = false;

    	$scope.uploadFile = function() {
    		File.upload($scope.fileToUpload).then(function (data) {
				console.log(data);
				$scope.fileUploaded = true;
		    },
		    function (errorMessage) {
		        console.log(errorMessage);
		    });
    	}
    });
});