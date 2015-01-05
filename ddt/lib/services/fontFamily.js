'use strict';

var angular = require('../angular');
var _ = require('lodash');


angular.module('ddt').factory('FontFamily', function($q, $http, Font, FontSources, ErrorMessages) {
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

        var family = this;
        var deferred = $q.defer();

        Font.make({source: FontSources.FILE, file: file})
            .then(function(font) {
                family._pushFont(font);
                deferred.resolve();
            }, function(error) {
                deferred.reject(error);
            });

        return deferred.promise;
    };

    FontFamily.prototype.addFontFromUrl = function(url) {
        if (this.source !== FontSources.URL) {
            throw new Error('Mismatching font family source. This family: ' + this.source);
        }

        var family = this;
        var deferred = $q.defer();

        Font.make({source: FontSources.URL, url: url})
            .then(function(font) {
                family._pushFont(font);
                deferred.resolve();
            }, function(error) {
                deferred.reject(error);
            });

        return deferred.promise;
    };

    // Adds an array of Font objects to this family.
    FontFamily.prototype.addFonts = function(fonts) {
        var family = this;
        _.each(fonts, function(font) {
            family._pushFont(font);
        });
    };

    FontFamily.prototype._pushFont = function(font) {
        if (font.familyName !== this.name) {
            throw new Error(ErrorMessages.MISMATCHING_FAMILY);
        }

        this.fonts.push(font);
    };

    FontFamily.prototype.removeFont = function(font) {
        _.pull(this.fonts, font);
    };

    FontFamily.prototype.size = function() {
        return this.fonts.length;
    };

    return FontFamily;
});
