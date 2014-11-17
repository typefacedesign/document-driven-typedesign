'use strict';

var angular = require('../angular');
var opentype = require('opentype.js');


angular.module('ddt').factory('FontFamily', function() {
    var FontFamily = function(options) {
        this.name = options.name || {};
        this.fonts = [];
    };

    FontFamily.prototype.addFontFromFile = function() {
    };

    FontFamily.prototype.addFontFromUrl = function () {
    };

    return FontFamily;
});
