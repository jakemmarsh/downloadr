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
        'angular-sanitize' : './lib/angular/angular-sanitize.min',
        'angular-ui-router' : './lib/angular/angular-ui-router.min',
        'angular-file-upload' : './lib/angular-file-upload.min',
        'file-api' : './lib/FileAPI.min',
        'jQuery' : './lib/jquery-1.10.2.min'
    },

    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jQuery']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-file-upload': {
            deps: ['file-api']
        }
    }
});

require(['./bootstrap'], function () {
    //nothing to do here...see bootstrap.js
});