define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('mainCtrl', function ($scope, File) {
    	$scope.fileUploaded = false;
    	$scope.fileSelected = false;
    	var $file;

    	$scope.onFileSelect = function($files) {
    		// store uploaded file
		    for (var i = 0; i < $files.length; i++) {
		      $file = $files[i];
		    }
		    $scope.fileSelected = true;
		}

		$scope.uploadFile = function() {
			// verify that a file has been selected
			if($file) {
				// make HTTP call to upload $file
				File.upload($file).then(function (data) {
					console.log(data);
			        $scope.fileUploaded = true;
			    },
			    function (errorMessage) {
			        console.log(errorMessage);
			    });
			}
		}
    });
});