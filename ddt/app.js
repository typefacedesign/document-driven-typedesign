'use strict';

window.jQuery = require('jquery');
require('bootstrap');
var angular = require('./lib/angular');
require('angular-route');
require('angular-sanitize');

var app = angular.module('ddt', ['ngRoute', 'ngSanitize']);

require('./constants');
require('./testStrings');
require('./lib/services');
require('./lib/directives');

// Importing index.js directly here because our current directory
// contains a file called 'app.js' and a directory called 'app'.
// Just doing a require('./app') confuses Browserify.
require('./app/index.js');

// Set up routes.
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/choose'
        })
        .when('/choose', {
            controller: 'FontsChooserCtrl',
            templateUrl: 'app/fontsChooser/fontsChooser.html',
            reloadOnSearch: false
        });
});
