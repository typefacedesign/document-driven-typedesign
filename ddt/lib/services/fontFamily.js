'use strict';

var angular = require('../angular');
var _ = require('lodash');


angular.module('ddt').factory('FontFamily', function($q, $http, Font, FontSources) {
    var FontFamily = function(name, source) {
        if (angular.isUndefined(name)) {
            throw new Error('No name specified for new FontFamily.');
        }

        this.name = name;
        this.source = source || FontSources.FILE;
        this.fonts = [];
    };

    FontFamily.prototype.addFontFromFile = function(file) {
        if (this.source !== FontSources.FILE) {
            throw new Error('Mismatching font family source. This family: ' + this.source);
        }

        this.fonts.push(new Font({source: FontSources.FILE, file: file}));
    };

    FontFamily.prototype.addFontFromUrl = function(url) {
        if (this.source !== FontSources.URL) {
            throw new Error('Mismatching font family source. This family: ' + this.source);
        }

        this.fonts.push(new Font({source: FontSources.URL, url: url}));
    };

    FontFamily.prototype.clone = function () {
        throw new Error('Not implemented.');
    };

    return FontFamily;
});
