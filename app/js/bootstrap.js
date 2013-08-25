/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
define([
    'require',
    'angular',
    'app',
    'routes',
    'impl'
], function (require, ng, app) {
    'use strict';

    app.run(function ($rootScope) {
        // do anything immediately on app run
    });

    require(['domReady!'], function (document) {
        return ng.bootstrap(document, ['app']);
    });
});