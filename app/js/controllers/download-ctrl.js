define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('downloadCtrl', function ($scope, $stateParams) {
    	$scope.fileId = $stateParams.fileId;
    });
});