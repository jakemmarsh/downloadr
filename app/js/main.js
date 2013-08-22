/*
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'lib': './lib',
        'domReady': './lib/requirejs/domReady',
        'angular': './lib/angular/angular.min',
        'angular-resource': './lib/angular/angular-resource.min',
        'angular-sanitize' : './lib/angular/angular-sanitize.min'
    },

    shim: {
        'angular': {
            exports: 'angular',
            deps: []
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        }
    }
});

require(['./bootstrap'], function () {
    //nothing to do here...see bootstrap.js
});