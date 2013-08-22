/**
 * Defines the main routes in the application.
 */
define(['./app'], function (app) {
    'use strict';
    app.config(function ($routeProvider, $locationProvider) {   
        $locationProvider.html5Mode(true);

        $routeProvider
        .when('/', {
            templateUrl: 'partials/index.html',
            controller: 'mainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    });
});