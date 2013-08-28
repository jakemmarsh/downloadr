define(['./index'], function (services) {
    'use strict';
	services.service('File', function($http, $q, $resource) {
		return {

			apiPath: '/api/files/',

			upload: function(file) {
				var deferred = $q.defer();

				$http.post(this.apiPath, file).success(function(data) {
					deferred.resolve(data);
				}).error(function() {
					deferred.reject("An error occurred while posting a file.");
				});

				return deferred.promise;
			},

			get: function(fileId) {
				var deferred = $q.defer();

				$http.get(this.apiPath + fileId).success(function(data) {
					deferred.resolve(data);
				}).error(function() {
					deferred.reject("An error occurred while fetching a file.");
				});

				return deferred.promise;
			}
		}
	});
});