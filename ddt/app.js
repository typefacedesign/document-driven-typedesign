'use strict';

window.jQuery = require('jquery');
require('bootstrap');
var angular = require('./lib/angular');
require('angular-route');
require('angular-sanitize');
require('es6-shim');
var localforage = require('localforage');
require('angular-localforage');

var app = angular.module('ddt', ['ngRoute', 'ngSanitize', 'LocalForageModule']);

require('./constants');
require('./testStrings');
require('./lib/services');
require('./lib/directives');

// Importing index.js directly here because our current directory
// contains a file called 'app.js' and a directory called 'app'.
// Just doing a require('./app') confuses Browserify.
require('./app/index.js');

// Set up routes.
app.config(function($routeProvider, $localForageProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/choose'
        })
        .when('/choose', {
            controller: 'FontsChooserCtrl',
            templateUrl: 'app/fontsChooser/fontsChooser.html',
            reloadOnSearch: false
        })
        .when('/review', {
            controller: 'FontsReviewerCtrl',
            templateUrl: 'app/fontsReviewer/fontsReviewer.html',
            reloadOnSearch: false
        })
        .when('/test', {
            controller: 'FontsTesterCtrl',
            templateUrl: 'app/fontsTester/fontsTester.html'
        });

    $localForageProvider.config({
        name: 'ddt',
        driver: localforage.INDEXEDDB,
        storeName: 'ddt_preferences',
        description: 'Stores preferences and fonts for DDT.'
    });
});
