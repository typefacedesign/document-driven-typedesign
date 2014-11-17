'use strict';

window.jQuery = require('jquery');
require('bootstrap');
var angular = require('../lib/angular');
require('angular-route');

var app = angular.module('ddt', ['ngRoute']);

// Require all our components.
require('./fontsChooser');

// Set up routes.
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/choose'
        })
        .when('/choose', {
            controller: 'FontsChooserCtrl',
            templateUrl: 'app/fontsChooser/fontsChooser.html'
        });
});
