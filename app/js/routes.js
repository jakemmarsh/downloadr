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
            url: '/',
            templateUrl: '/partials/home.html',
            controller: 'mainCtrl'
        });
    });
});