define([
    'angular',
    'angular-sanitize',
    'angular-ui-router',
    'angular-file-upload',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'app.services',
        'app.controllers',
        'app.filters',
        'app.directives',
        'ngSanitize',
        'ui.state',
        'angularFileUpload'
    ]);
});