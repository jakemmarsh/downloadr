/**
 * Defines the main routes in the application.
 */
define(['./app'], function (app) {
    'use strict';
    app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {  
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise("/") 

        $stateProvider
        .state('index', {
            templateUrl: '/partials/index.html'
        })
        .state('index.home', {
            url: '/',
            templateUrl: '/partials/home.html',
            controller: 'mainCtrl'
        })
        .state('index.download', {
            url: '/file/:fileId',
            templateUrl: '/partials/download.html',
            controller: 'downloadCtrl',
            resolve: {
                promisedFile:  function($http, $stateParams, $location){
                    return $http.get('/api/files/' + $stateParams.fileId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function(errorData) {
                         $location.path('/');
                    });
                }
           }
        });
    });
});