define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('mainCtrl', function ($scope, $http) {
    	$scope.fileUploaded = false;
    	$scope.fileSelected = false;
    	$scope.uploadingFile = false;
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
				$scope.uploadingFile = true;
				// make HTTP call to upload $file
				$http.uploadFile({
			        url: 'api/files/',
			        file: $file
			    }).then(function(data, status, headers, config) {
			        // file is uploaded successfully
			        $scope.fileUploaded = true;
			        $scope.uploadingFile = false;
			        console.log(data);
			    },
			    function (errorMessage) {
			    	$scope.uploadingFile = false;
			        console.log(errorMessage);
			    });
			}
		}
    });
});